import React from "react";

const PromoPrediction = () => {
  return (
    <div className="container mx-auto shadow-lg">
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/4 bg-[#ecf6fd] p-4 pb-10">
          <div className="text-left">
            <p className="font-bold">PREDICTION</p>
            <p>Projected Values</p>
          </div>
          <div className="flex flex-col items-center justify-center pt-6">
            <div className="relative">
              {/* Donut Chart Placeholder */}
              <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold">0%</span>
              </div>
            </div>
            <p className="my-4">Budget Utilization</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-left">
              <p className="font-bold">$0</p>
              <p>Budget Utilized</p>
            </div>
            <div className="text-left">
              <p className="font-bold">R 0</p>
              <p>Points Rewarded</p>
            </div>
            <div className="text-left">
              <p>$0</p>
              <p>Sales Booking</p>
            </div>
            <div className="text-left">
              <p>0</p>
              <p># of Sales</p>
            </div>
          </div>
        </div>

        {/* Vertical Line Separator */}
        <div className="w-px bg-gray-300 shadow"></div>

        {/* Right Column */}
        <div className="w-3/4 bg-white p-4 flex flex-col items-center justify-center">
          <div className="text-left">
            <p className="font-bold text-lg">No sales predicted.</p>
            <p>Change some promotion details and try again.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPrediction;
