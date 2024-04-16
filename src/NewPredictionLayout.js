import React from "react";
import MUICircularProgress from "./MUICircularProgress";

const NewPredictionLayout = () => {
  return (
    <div className="flex relative justify-center items-stretch bg-gray-200 py-10 px-10 w-full max-w-screen-2xl mx-auto">
      {/* Prediction Container */}
      <div className="bg-[#fcf9d9] py-9 px-5 rounded-lg relative w-1/3">
        <h1 className="text-lg text-[#384e09] text-center font-bold uppercase -mt-5 mb-3">
          Prediction
        </h1>
        <div className="grid grid-cols-3 gap-10 h-full">
          <div className="flex flex-col justify-between items-center">
            <div>
              <p className="text-lg">$115,000</p>
              <p className="text-sm">Budget Utilized</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg">
                $1,230,000
              </p>
              <p className="text-sm">Sales Booking</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center p-8">
            <MUICircularProgress color="#ffad4c" percentage={65}/>
            <h2 className="text-lg text-center mt-2 w-36">Budget Utilization</h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div>
              <p className="text-lg">R 75,000</p>
              <p className="text-sm">Points Rewarded</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg">215</p>
              <p className="text-sm"># of Sales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Circle */}
      {/* <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
        <div className="bg-blue-100 rounded-full p-3">
          <p>ICON</p>
        </div>
      </div> */}

      {/* Recommendation Container */}
      <div className="bg-[#edf6fb] p-9 px-24 rounded-lg ml-8 w-5/12">
        <h1 className="text-lg text-[#384e09] text-center font-bold uppercase -mt-5">
          Recommendation
        </h1>
        <p className="text-center pb-3">Increase up to 95%</p>
        <p className="text-center">
          Based on your promotion requirements we have provided some suggested
          changes below to help you achieve a higher level of participation.
        </p>
        <div className="flex flex-col justify-center items-center px-8 pt-3 pb-8">
          <MUICircularProgress color="#27ae60" percentage={95} />
        </div>
        <button className="bg-[#80c45b] text-white rounded-md px-4 py-2 -mb-6 block mx-auto">
          Know how &gt;
        </button>
      </div>
    </div>
  );
};

export default NewPredictionLayout;
