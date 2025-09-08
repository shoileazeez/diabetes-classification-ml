import React from "react";

const AboutTool = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-3">About This Tool</h2>
      <p className="text-gray-700 mb-2">
        This prediction model is trained on the{" "}
        <strong>Pima Indian Diabetes Database</strong>, which contains
        diagnostic measurements for diabetes prediction.
      </p>
      <p className="text-gray-700 mb-4">
        The model uses machine learning algorithms to analyze the relationships
        between various health parameters and diabetes risk.
      </p>

      <h3 className="font-semibold text-gray-800 mb-2">Available Options:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Single patient prediction (current page)</li>
        <li>Batch prediction for multiple patients</li>
        <li>CSV import for bulk analysis</li>
        <li>Comprehensive risk assessment</li>
      </ul>
    </div>
  );
};

export default AboutTool;
