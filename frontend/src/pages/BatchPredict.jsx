// ...existing code...
import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft, Users, Trash2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const BatchPredict = () => {
  const [patients, setPatients] = useState([
    {
      name: "",
      Pregnancies: "",
      Glucose: "",
      BloodPressure: "",
      SkinThickness: "",
      Insulin: "",
      BMI: "",
      diabetesPedigreeFunction: "",
      Age: "",
    },
  ]);

  const [activeTab, setActiveTab] = useState("input");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...patients];
    updated[index][name] = value;
    setPatients(updated);
  };

  const addPatient = () => {
    setPatients([
      ...patients,
      {
        name: "",
        Pregnancies: "",
        Glucose: "",
        BloodPressure: "",
        SkinThickness: "",
        Insulin: "",
        BMI: "",
        diabetesPedigreeFunction: "",
        Age: "",
      },
    ]);
  };

  const removePatient = (index) => {
    setPatients((prev) => prev.filter((_, i) => i !== index));
  };

  const loadSampleData = () => {
    setPatients([
      {
        name: "Low Risk Patient",
        Pregnancies: 0,
        Glucose: 80,
        BloodPressure: 60,
        SkinThickness: 12,
        Insulin: 60,
        BMI: 19.8,
        diabetesPedigreeFunction: 0.15,
        Age: 21,
      },
      {
        name: "Medium Risk Patient",
        Pregnancies: 1,
        Glucose: 90,
        BloodPressure: 70,
        SkinThickness: 18,
        Insulin: 75,
        BMI: 22.0,
        diabetesPedigreeFunction: 0.25,
        Age: 28,
      },
      {
        name: "Borderline Risk Patient",
        Pregnancies: 2,
        Glucose: 110,
        BloodPressure: 75,
        SkinThickness: 20,
        Insulin: 80,
        BMI: 25.5,
        diabetesPedigreeFunction: 0.3,
        Age: 30,
      },
      {
        name: "High Risk Patient",
        Pregnancies: 8,
        Glucose: 180,
        BloodPressure: 95,
        SkinThickness: 35,
        Insulin: 200,
        BMI: 35.2,
        diabetesPedigreeFunction: 1.2,
        Age: 55,
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResults(null);
    setError(null);

    const payload = patients.map((p) => ({
      pregnancies: Number(p.Pregnancies || 0),
      glucose: Number(p.Glucose || 0),
      blood_pressure: Number(p.BloodPressure || 0),
      skin_thickness: Number(p.SkinThickness || 0),
      insulin: Number(p.Insulin || 0),
      bmi: Number(p.BMI || 0),
      diabetes_pedigree_function: Number(p.diabetesPedigreeFunction || 0),
      age: Number(p.Age || 0),
    }));

    try {
      const response = await axios.post(
        "https://shark-app-6cums.ondigitalocean.app/predict_batch",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      setResults(response.data.predictions || response.data || []);
      setActiveTab("results");
    } catch (err) {
      setError(err.response?.data || err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/predict"
            className="text-gray-500 inline-flex items-center gap-2 text-sm hover:text-black mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Single Prediction
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h1 className="text-3xl font-bold">Batch Diabetes Prediction</h1>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={loadSampleData}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-200"
              >
                Load Sample Data
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Add multiple patients and get AI-powered diabetes risk predictions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-md p-1 mb-6">
          <button
            onClick={() => setActiveTab("input")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "input" ? "bg-white shadow text-black" : "text-gray-600"
            }`}
          >
            Patient Input
          </button>
          <button
            onClick={() => setActiveTab("results")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "results" ? "bg-white shadow text-black" : "text-gray-600"
            }`}
          >
            Results
          </button>
        </div>

        {/* Input Form */}
        {activeTab === "input" && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Patient Information</h2>
              <p className="text-sm text-gray-500 mt-1">
                Add multiple patients and their health parameters for batch prediction
              </p>
              <div className="grid gap-6 p-4">
              {patients.map((patient, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md border border-gray-200 min-h-[220px] flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">Patient {index + 1}</h3>
                    {patients.length > 1 && (
                      <button type="button" onClick={() => removePatient(index)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                    <input
                      name="name"
                      value={patient.name}
                      onChange={(e) => handleChange(index, e)}
                      placeholder={`Patient ${index + 1}`}
                      className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Pregnancies", label: "Pregnancies", placeholder: "0–20", hint: "Total number of pregnancies", min: 0, max: 20},
                      { name: "Glucose", label: "Glucose (mg/dL)", placeholder: "0–300", hint: "Glucose level in mg/dL",min: 0, max: 300, step: 0.01},
                      { name: "BloodPressure", label: "Blood Pressure (mmHg)", placeholder: "0–200", hint: "Blood pressure in mmHg",  min: 0, max: 200, step: 0.01},
                      { name: "SkinThickness", label: "Skin Thickness (mm)", placeholder: "0–100", hint: "Skin thickness in mm",  min: 0, max: 100,step: 0.01},
                      { name: "Insulin", label: "Insulin (μU/mL)", placeholder: "0–1000", hint: "Insulin level in μU/mL",  min: 0, max: 1000, step: 0.01},
                      { name: "BMI", label: "BMI (kg/m²)", placeholder: "0–80", hint: "Body Mass Index",  min: 0, max: 80, step: 0.01},
                      { name: "diabetesPedigreeFunction", label: "Diabetes Pedigree Function", placeholder: "0–3", hint: "Genetic risk factor", min: 0, max: 3, step: 0.01},
                      { name: "Age", label: "Age (years)", placeholder: "1–120", hint: "Age in years",  min: 1, max: 120},
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                        <input
                          name={field.name}
                          value={patient[field.name]}
                          placeholder={field.placeholder}
                          min={field.min}
                          max={field.max}
                          step={field.step || 1}
                          type="number"
                          onChange={(e) => handleChange(index, e)}
                          className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm bg-gray-100 shadow-sm focus:border-black-500 focus:ring-indigo-500"
                        />
                        <p className="mt-1 text-xs text-gray-500">{field.hint}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={addPatient}
                className="mt-4 px-4 py-2 bg-white text-black rounded-full font-medium shadow-sm hover:bg-gray-100"
              >
                + Add Patient
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 flex-1 rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 disabled:opacity-60"
              >
                {isLoading ? "Predicting..." : "Predict for All Patients"}
              </button>
            </div>
          </form>
        )}

        {/* Results */}
        {activeTab === "results" && (
          <div className="space-y-4">
            {error && <div className="p-4 bg-red-50 border border-red-100 rounded-md text-red-700">Error: {typeof error === "string" ? error : JSON.stringify(error)}</div>}

            {results && results.length > 0 ? (
              results.map((res, i) => (
                <div key={i} className="p-4 border rounded-lg bg-gray-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">{patients[i]?.name || `Patient ${i + 1}`}</p>
                    <p className="text-sm text-gray-500">Confidence: {(res.probability * 100 || 0).toFixed(1)}%</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${res.prediction === 1 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                      {res.prediction === 1 ? "High Risk" : "Low Risk"}
                    </span>

                    <p className="text-sm text-gray-600">{res.explanation || (res.prediction === 1 ? "Model indicates elevated likelihood of diabetes." : "Model indicates low likelihood of diabetes.")}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results yet.</p>
            )}
          </div>
        )}
      </div>

      <div className="w-full mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default BatchPredict;
