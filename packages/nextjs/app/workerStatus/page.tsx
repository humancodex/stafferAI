"use client";

import type { NextPage } from "next";

const WorkerStatus: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-2xl font-bold main-title">Worker Status</h1>

        <div className="px-5">
          <input type="checkbox" className="toggle toggle-lg toggle-accent toggle-theToggle" />
        </div>
      </div>
    </>
  );
};

export default WorkerStatus;
