import React from "react";

const AboutTool = () => {
  return (
    <div className="max-w-md mx-auto grid p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
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

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Available Options */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">
        Available Options :
      </h3>
      <div className="gap-8 text-gray-700">
        <div className="p-4 bg-gray-50 ">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>✅ Single patient prediction (current page)</li>
                <li>📊 Batch prediction for multiple patients</li>
                <li>📂 CSV import for bulk analysis</li>
                <li>🧾 Comprehensive risk assessment</li>
              </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutTool;