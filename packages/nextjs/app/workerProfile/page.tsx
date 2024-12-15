"use client";

import type { NextPage } from "next";

const WorkerProfile: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-2xl font-bold main-title">Worker Profile</h1>

        <div className="px-5">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label" htmlFor="firstName">
                    <span className="label-text">First Name</span>
                  </label>
                  <input id="firstName" name="firstName" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="lastName">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input id="lastName" name="lastName" className="input input-bordered w-full" required />
                </div>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="dateOfBirth">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input id="email" name="email" type="email" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="phoneNumber">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label" htmlFor="idType">
                    <span className="label-text">ID Type</span>
                  </label>
                  <select id="idType" name="idType" className="select select-bordered w-full" required>
                    <option value="" disabled>
                      Select ID type
                    </option>
                    <option value="passport">Passport</option>
                    <option value="driverLicense">Driver's License</option>
                    <option value="nationalId">National ID</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="idNumber">
                    <span className="label-text">ID Number</span>
                  </label>
                  <input id="idNumber" name="idNumber" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="expirationDate">
                    <span className="label-text">Expiration Date</span>
                  </label>
                  <input
                    id="expirationDate"
                    name="expirationDate"
                    type="date"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkerProfile;
