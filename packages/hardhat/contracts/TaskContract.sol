//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

// Import the USDC interface
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author StafferAI
 */

contract TaskContract {
    enum TaskStatus { Created, InProgress, AwaitingValidation, Approved, Completed, Disputed }

    struct Task {
        uint taskId;
        address client;
        address aiAgent;
        address supervisor;
        uint payment;
        TaskStatus status;
        bool isCompleted;
    }

    mapping(uint => Task) public tasks;
    uint public taskCounter;

    mapping(address => uint) public balances; // Store balances for agents and supervisors

    // Add USDC token address (replace with actual USDC address on Sepolia)
    IERC20 public usdcToken;

    event TaskCreated(uint taskId, address client, address aiAgent, address supervisor, uint payment);
    event TaskInProgress(uint taskId);
    event TaskValidated(uint taskId);
    event TaskApproved(uint taskId);
    event PaymentReleased(uint taskId, address aiAgent, address supervisor);

    modifier onlyClient(uint _taskId) {
        require(tasks[_taskId].client == msg.sender, "Only the client can perform this action");
        _;
    }

    modifier onlySupervisor(uint _taskId) {
        require(tasks[_taskId].supervisor == msg.sender, "Only the supervisor can perform this action");
        _;
    }

    constructor() {
        usdcToken = IERC20(0x5fd84259d66Cd46123540766Be93DFE6D43130D7);
    }

    function createTask(address _aiAgent, address _supervisor, uint _payment) external {
        require(_payment > 0, "Payment must be greater than 0");

        // Transfer USDC from client to this contract (escrow)
        usdcToken.transferFrom(msg.sender, address(this), _payment);

        taskCounter++;
        tasks[taskCounter] = Task({
            taskId: taskCounter,
            client: msg.sender,
            aiAgent: _aiAgent,
            supervisor: _supervisor,
            payment: _payment,
            status: TaskStatus.Created,
            isCompleted: false
        });

        emit TaskCreated(taskCounter, msg.sender, _aiAgent, _supervisor, _payment);
    }

    function startTask(uint _taskId) external {
        Task storage task = tasks[_taskId];
        require(task.status == TaskStatus.Created, "Task cannot be started");
        require(msg.sender == task.aiAgent, "Only the assigned AI agent can start the task");

        task.status = TaskStatus.InProgress;
        emit TaskInProgress(_taskId);
    }

    function validateTask(uint _taskId) external onlySupervisor(_taskId) {
        Task storage task = tasks[_taskId];
        require(task.status == TaskStatus.InProgress, "Task must be in progress to validate");

        task.status = TaskStatus.AwaitingValidation;
        emit TaskValidated(_taskId);
    }

    function approveTask(uint _taskId) external onlyClient(_taskId) {
        Task storage task = tasks[_taskId];
        require(task.status == TaskStatus.AwaitingValidation, "Task must be validated by supervisor");

        task.status = TaskStatus.Approved;
        task.isCompleted = true;
        emit TaskApproved(_taskId);

        releasePayment(_taskId);
    }

    function releasePayment(uint _taskId) internal {
        Task storage task = tasks[_taskId];
        require(task.isCompleted, "Task must be completed to release payment");

        uint supervisorShare = (task.payment * 20) / 100; // Supervisor gets 20%
        uint agentShare = task.payment - supervisorShare; // AI Agent gets the remaining 80%

        // Transfer USDC to supervisor and AI agent
        usdcToken.transfer(task.supervisor, supervisorShare);
        usdcToken.transfer(task.aiAgent, agentShare);

        task.status = TaskStatus.Completed;
        emit PaymentReleased(_taskId, task.aiAgent, task.supervisor);
    }

    function withdrawFunds() external {
        uint amount = balances[msg.sender];
        require(amount > 0, "No funds to withdraw");

        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function disputeTask(uint _taskId) external onlyClient(_taskId) {
        Task storage task = tasks[_taskId];
        require(task.status != TaskStatus.Completed, "Task is already completed");

        task.status = TaskStatus.Disputed;
    }

    function resolveDispute(uint _taskId, bool refundClient) external onlySupervisor(_taskId) {
        Task storage task = tasks[_taskId];
        require(task.status == TaskStatus.Disputed, "Task is not in dispute");

        if (refundClient) {
            payable(task.client).transfer(task.payment);
        } else {
            releasePayment(_taskId);
        }

        task.status = TaskStatus.Completed;
    }
}
