import React from "react";

const AboutTool = () => {
  return (
    <div className="max-w-md  grid  p-6 bg-white shadow-lg rounded-2xl border border-gray-100  h-[400px]">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        About This Tool
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-2 leading-relaxed">
        This prediction model is trained on the{" "}
        <strong className="font-medium">Pima Indian Diabetes Database</strong>, 
        which contains diagnostic measurements for predicting the likelihood 
        of diabetes.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The model leverages advanced machine learning algorithms to analyze 
        the relationships between health parameters and diabetes risk, 
        providing reliable predictions.
      </p>
    </div>
  );
};

export default AboutTool;