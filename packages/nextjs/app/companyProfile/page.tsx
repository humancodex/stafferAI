"use client";

import type { NextPage } from "next";

const CompanyProfile: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-2xl font-bold main-title">Company Profile</h1>

        <div className="px-5">
          <div className="space-y-4">
            <div className="form-control">
              <label className="label" htmlFor="companyName">
                <span className="label-text">Company Name</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                className="input input-bordered w-full"
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="taxId">
                <span className="label-text">Tax ID</span>
              </label>
              <input
                id="taxId"
                name="taxId"
                className="input input-bordered w-full"
                placeholder="Enter tax ID"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="mainIndustry">
                <span className="label-text">Main Industry</span>
              </label>
              <select id="mainIndustry" name="mainIndustry" className="select select-bordered w-full" required>
                <option value="" disabled selected>
                  Select industry
                </option>
                <option value="construction">Construction</option>
                <option value="agriculture">Agriculture</option>
                <option value="hospitality">Hospitality</option>
                <option value="logistics">Logistics</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="contactPerson">
                <span className="label-text">Contact Person</span>
              </label>
              <input
                id="contactPerson"
                name="contactPerson"
                className="input input-bordered w-full"
                placeholder="Enter contact person's name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="contactEmail">
                <span className="label-text">Contact Email</span>
              </label>
              <input
                id="contactEmail"
                name="contactEmail"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter contact email"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
