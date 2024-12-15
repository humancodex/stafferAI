import { expect } from "chai";
import { ethers } from "hardhat";
import { TaskContract } from "../typechain-types";

describe("TaskContract", function () {
  let YourContract;
  let yourContract: TaskContract;
  let owner: any, client: any, aiAgent: any, supervisor: any;
  const usdcTokenAddress: string = "0x5fd84259d66Cd46123540766Be93DFE6D43130D7"; // Ensure this is a string

  beforeEach(async function () {
    [owner, client, aiAgent, supervisor] = await ethers.getSigners();

    // Deploy the contract
    YourContract = await ethers.getContractFactory("TaskContract");
    yourContract = (await YourContract.deploy(usdcTokenAddress)) as TaskContract;
    await yourContract.waitForDeployment();
  });

  it("should create a task", async function () {
    const payment = ethers.parseUnits("100", 6); // Remove .utils

    // Simulate USDC transfer (you may need to mock the USDC contract)
    await yourContract.connect(client).createTask(aiAgent.address, supervisor.address, payment);

    const task = await yourContract.tasks(1);
    expect(task.client).to.equal(client.address);
    expect(task.aiAgent).to.equal(aiAgent.address);
    expect(task.supervisor).to.equal(supervisor.address);
    expect(task.payment).to.equal(payment);
    expect(task.status).to.equal(0); // TaskStatus.Created
  });

  // Add more tests for other functionalities like starting, validating, approving tasks, etc.
});
