"use client";

import type { NextPage } from "next";

const BuyToken: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-2xl font-bold main-title">Buy Vouchen</h1>

        <div className="px-5">
          <div className="space-y-6 max-w-md mx-auto p-6 bg-base-200 rounded-lg">
            <h2 className="text-lg font-bold">Buy Crypto Token</h2>

            <div className="form-control">
              <label className="label" htmlFor="tokenAmount">
                <span className="label-text">Amount of Tokens</span>
              </label>
              <input
                id="tokenAmount"
                name="tokenAmount"
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter token amount"
                required
                onChange={e => {
                  const tokenAmount = parseFloat(e.target.value) || 0;
                  const usdElement = document.getElementById("usdEquivalent") as HTMLInputElement;
                  if (usdElement) {
                    usdElement.value = (tokenAmount * 15).toFixed(2);
                  }
                }}
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="usdEquivalent">
                <span className="label-text">Price Equivalent (USD)</span>
              </label>
              <input
                id="usdEquivalent"
                name="usdEquivalent"
                type="text"
                className="input input-bordered w-full"
                placeholder="Automatically calculated"
                disabled
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Select Payment Method</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="btn btn-outline">Credit Card</button>
                <button className="btn btn-outline">PayPal</button>
                <button className="btn btn-outline">Bank Transfer</button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Pay with Cryptocurrency</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="btn btn-outline">Bitcoin</button>
                <button className="btn btn-outline">Ethereum</button>
                <button className="btn btn-outline">USDT</button>
                <button className="btn btn-outline">BNB</button>
                <button className="btn btn-outline">ADA</button>
                <button className="btn btn-outline">DOGE</button>
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary w-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyToken;
