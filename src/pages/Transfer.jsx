import React from 'react';

const Transfer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl text-black font-semibold mb-4">Transfer</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">To</label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            >
              <option>127271684 (Asmo)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              ▼
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="18px font-bold text-black">Amount</label>
          <input
            type="text"
            value="IDR 150.000,00"
            className="block w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Balance</label>
          <span className="block text-[#26AA99] font-semibold">IDR 10.000.000</span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            className="block w-full bg-gray-200 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
          ></textarea>
        </div>

        <button className="w-full bg-[#19918F] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600">
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Transfer;
