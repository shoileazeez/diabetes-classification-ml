import { useState } from "react";
import axios from "axios";
import {ArrowLeft, Users} from "lucide-react";
import {Link} from "react-router-dom";
import AboutTool from "../components/AboutTool";
import Footer from "../components/Footer"
const Predict = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    diabetesDedigreeFunction: "",
    Age: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);

    // 🔹 Map formData to backend payload
    const payload = {
      pregnancies: Number(formData.Pregnancies),
      glucose: Number(formData.Glucose),
      blood_pressure: Number(formData.BloodPressure),
      skin_thickness: Number(formData.SkinThickness),
      insulin: Number(formData.Insulin),
      bmi: Number(formData.BMI),
      diabetes_pedigree_function: Number(formData.diabetesDedigreeFunction),
      age: Number(formData.Age),
    };

    try {
      const response = await axios.post(
        "https://shark-app-6cums.ondigitalocean.app/predict",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow">
      <div className="container mx-auto px-4  py-8">
        <div className="mb-8">
        <Link to="/" className="text-gray-500 inline-flex items-center gap-2 text-sm hover:text-sm hover:text-black mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold">Diabetes Risk Prediction</h1>
          <Link 
           to="/batch-predict" 
           className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-800 shadow-sm 
             hover:bg-gray-200 hover:shadow-md transition-all duration-200"
          >
            <Users className="h-4 w-4" />
            Batch Prediction
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Enter your health information to get an AI-powered diabetes risk assessment
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-4">
            {/* Header */}
            <h3 className="text-lg font-semibold text-gray-800">Health Parameters</h3>
            <p className="text-sm text-gray-500 mb-6">
              Please fill in all fields with accurate information for the best prediction results
            </p>
            {/* Grid for form inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Pregnancies
                </label>
                <input
                name="Pregnancies"
                value={formData.Pregnancies}
                onChange={handleChange}
                placeholder="0–20"
                min="0"
                max="20"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
               />
                <p className="mt-1 text-sm text-gray-600">Total number of pregnancies</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Glucose Level (mg/dL)
                </label>
                <input
                name="Glucose"
                value={formData.Glucose}
                onChange={handleChange}
                placeholder="0–300"
                min="0"
                step="0.01"
                max="300"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <p className="mt-1 text-sm text-gray-600">Glucose level in mg/dL</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Blood Pressure (mmHg)
                </label>
                <input
                name="BloodPressure"
                value={formData.BloodPressure}
                onChange={handleChange}
                placeholder="0–200"
                step="0.01"
                min="0"
                max="200"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
                <p className="mt-1 text-sm text-gray-600">Blood pressure in mmHg</p>
              </div>

             <div>
              <label className="block text-sm font-medium text-gray-700">
                Skin Thickness (mm)
              </label>
              <input
              name="SkinThickness"
              value={formData.SkinThickness}
              onChange={handleChange}
              placeholder="0–100"
              step="0.01"
              min="0"
              max="100"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
               <p className="mt-1 text-sm text-gray-600">Skin thickness in mm</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Insulin (μU/mL)
                </label>
                <input
                name="Insulin"
                value={formData.Insulin}
                onChange={handleChange}
                placeholder="0–1000"
                step="0.01"
                min="0"
                max="1000"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <p className="mt-1 text-sm text-gray-600">Insulin level in μU/mL</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  BMI (kg/m²)
                </label>
                <input
                name="BMI"
                value={formData.BMI}
                onChange={handleChange}
                placeholder="0–80"
                step="0.01"
                min="0"
                max="80"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
                <p className="mt-1 text-sm text-gray-600">Body Mass Index</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Diabetes Pedigree Function
                </label>
                <input
                 name="diabetesDedigreeFunction"
                 value={formData.diabetesDedigreeFunction}
                 onChange={handleChange}
                 placeholder="0–3"
                 step="0.01"
                 min="0"
                 max="3"
                 className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
                <p className="mt-1 text-sm text-gray-600">Genetic risk factor</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age (years)
                </label>
                <input
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                placeholder="1-120"
                min="1"
                max="120"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
                <p className="mt-1 text-sm text-gray-600">Age in years</p>
              </div>
            </div>
          {/* Submit Button */}
            <button
            type="submit"
            disabled={isLoading}
            className="mt-6 w-full rounded-md bg-black px-4 py-2 text-white font-medium rounded-bg hover:bg-gray-800"
             >
              {isLoading ? "Predicting..." : "Predict Diabetes Risk"}
              </button>
          </form>
          {/* 🔹 Result Section */}
        {result && (
          <div className="mt-6 p-6 bg-white shadow-md rounded-xl border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800">Prediction Result</h4>
            {/* Risk Message */}
            <p className="mt-2 text-gray-700">
            {result.prediction === 1
            ? "⚠️ High likelihood of diabetes detected."
            : "✅ Low likelihood of diabetes detected."}
            </p>

            {/* Risk Level */}
            {result.risk_level && (
            <p className="mt-2 text-sm">
            <span className="font-medium text-gray-800">Risk Level:</span>{" "}
            <span
            className={
              result.risk_level === "High"
              ? "text-red-600 font-bold"
              : result.risk_level === "Medium"
              ? "text-yellow-600 font-semibold"
              : "text-green-600 font-semibold"
            }
            >
              {result.risk_level}
              </span>
            </p>
          )}
          {/* Probability (optional) */}
          {result.probability && (
          <p className="mt-1 text-sm text-gray-600">
            Confidence: {(result.probability * 100).toFixed(2)}%
            </p>
          )}
        </div>
      )}
        </div>
        <div className="lg:col-span-1 rounded-lg lex justify-start lg:justify-center">
          <AboutTool/>
        </div>
      </div>
      </div>
      <div className="w-full">
          <Footer/>
      </div>
    </div>
    
  );
};

export default Predict;
