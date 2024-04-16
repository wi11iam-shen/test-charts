import React from "react";
import PredictionSection from "./PredictionSection";
import RecommendationSection from "./RecommendationSection";

const NewPredictionLayout = () => {
  return (
    <div className="flex relative justify-center items-stretch bg-gray-200 py-10 px-10 w-full max-w-screen-2xl mx-auto">
      {/* Prediction Container */}
      <PredictionSection />
      {/* Icon Circle */}
      <div className="absolute top-1/2  transform -translate-x-7/12 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
        <div className="bg-blue-100 rounded-full p-3">
          <p>ICON</p>
        </div>
      </div>
      {/* Recommendation Container */}
      <RecommendationSection />
    </div>
  );
};

export default NewPredictionLayout;
