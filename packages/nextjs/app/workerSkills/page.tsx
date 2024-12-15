"use client";

import type { NextPage } from "next";

const WorkerSkills: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-2xl font-bold main-title">Worker Skills</h1>

        <div className="px-5">
          <div className="grid grid-cols-8 gap-4">
            {[
              "Carpentry",
              "Plumbing",
              "Electrical Work",
              "Masonry",
              "Roofing",
              "Welding",
              "Painting",
              "Farming",
              "Harvesting",
              "Pest Control",
              "Cooking",
              "Baking",
              "Bartending",
              "Housekeeping",
              "Front Desk",
              "Event Planning",
              "Food Serving",
              "Laundry Services",
              "Delivery",
              "Packing",
              "Route Planning",
              "Customer Support",
            ].map((label, index) => (
              <div className="form-control" key={index}>
                <label className="cursor-pointer label">
                  <span className="label-text">{label}</span>
                  <input type="checkbox" className="checkbox checkbox-primary ml-2" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkerSkills;
