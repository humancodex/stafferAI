"use client";

import type { NextPage } from "next";

const generateRandomId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const TaskTable: NextPage = () => {
  const tasks = [
    { id: generateRandomId(), startDate: "2025-01-10", endDate: "2025-01-15" },
    { id: generateRandomId(), startDate: "2025-01-12", endDate: "2025-01-18" },
    { id: generateRandomId(), startDate: "2025-01-05", endDate: "2025-01-10" },
    { id: generateRandomId(), startDate: "2025-01-20", endDate: "2025-01-25" },
    { id: generateRandomId(), startDate: "2025-01-22", endDate: "2025-01-27" },
  ];

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <h1 className="text-2xl font-bold main-title">Worker Profile</h1>

      <div className="px-5">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th className="w-[30%]">Task ID</th>
                <th className="w-[50%]">Start & End Dates</th>
                <th className="w-[20%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.id}</td>
                  <td>
                    {task.startDate} - {task.endDate}
                  </td>
                  <td>
                    <button className="btn btn-primary ">Send Rewards</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
