"use client";

import { SetStateAction, useState } from "react";
import type { NextPage } from "next";

const CreateTask: NextPage = () => {
  const [trade, setTrade] = useState("");
  const [isASAP, setIsASAP] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [numericValue, setNumericValue] = useState(1000);
  const [sliderValue, setSliderValue] = useState(0);

  // Handle form changes
  const handleTradeChange = (e: { target: { value: SetStateAction<string> } }) => setTrade(e.target.value);
  const handleASAPChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) =>
    setIsASAP(e.target.checked);
  const handleDateChange = (e: { target: { value: SetStateAction<string> } }) => setSelectedDate(e.target.value);
  const handleNumericChange = (e: { target: { value: any } }) => setNumericValue(Number(e.target.value));
  const handleSliderChange = (e: { target: { value: any } }) => {
    const value = Number(e.target.value);
    setSliderValue(value);

    setNumericValue(1000 - value);
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-2xl font-bold main-title">Create Task</h1>

        <form className="taskForm mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
          {/* Trade Selector */}
          <div className="">
            <label className="label">
              <span className="label-text">Select Trade</span>
            </label>
            <select className="select select-bordered" value={trade} onChange={handleTradeChange}>
              <option value="">Choose a trade</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Painter">Painter</option>
            </select>
          </div>

          {/* ASAP Checkbox */}
          <div className="">
            <label className="label cursor-pointer">
              <span className="label-text">Is this ASAP?</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={isASAP}
                onChange={handleASAPChange}
              />
            </label>
          </div>

          {/* Date Selector */}
          <div className="">
            <label className="label">
              <span className="label-text">Select Date</span>
            </label>
            <input type="date" className="input input-bordered l" value={selectedDate} onChange={handleDateChange} />
          </div>

          {/* Numeric Selector */}
          <div className="">
            <label className="label">
              <span className="label-text">Vounchen</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={numericValue}
              onChange={handleNumericChange}
              min="0"
              max="1000"
            />
          </div>

          {/* Slider and Numeric Indicator */}
          <div className="">
            <label className="label">
              <span className="label-text">People to call</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={sliderValue}
                onChange={handleSliderChange}
                className="range range-primary"
              />
              <span>{numericValue}</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className=" mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
