import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AboutTool from "../components/AboutTool";
import PredictionResult from "../components/PredictionResult";
import RiskGuide from "../components/RiskGuide";
import HealthChart from "../components/HealthChart";
import Footer from "../components/Footer";

const Predict = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    blood_pressure: "",
    skin_thickness: "",
    insulin: "",
    bmi: "",
    diabetes_pedigree_function: "",
    age: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse(null);

    try {
      const res = await axios.post(
        "https://shark-app-6cums.ondigitalocean.app/predict",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setResponse(res.data);
      toast.success("Prediction completed successfully!");
    } catch (err) {
      toast.error("Error making prediction ❌");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left: Form */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Diabetes Prediction Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block font-medium capitalize">{key.replace(/_/g, " ")}</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white px-4 py-2 rounded"
          >
            {isLoading ? "Predicting..." : "Predict"}
          </button>
        </form>

        {/* Health chart under form */}
        <HealthChart formData={formData} />
      </div>

      {/* Right: About tool + results */}
      <div>
        {!response && <AboutTool />}
        {response && (
          <>
            <PredictionResult result={response} />
            <RiskGuide />
            <AboutTool />
          </>
        )}
      </div>
    </div>
    
  );
};

export default Predict;
