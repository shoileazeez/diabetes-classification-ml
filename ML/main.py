from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import joblib
import pandas as pd
import numpy as np
from typing import Dict, Any
import uvicorn

# Custom function needed for model loading (must be defined before loading)
def replace_zeros_with_nan(X):
    """
    Replace zeros with NaN for columns that shouldn't have zero values
    This function is used in the preprocessing pipeline
    """
    X_copy = X.copy()
    # Replace zeros with NaN for columns that shouldn't have zero values
    zero_cols = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    for col in zero_cols:
        if col in X_copy.columns:
            X_copy[col] = X_copy[col].replace(0, np.nan)
    return X_copy

# Initialize FastAPI app
app = FastAPI(
    title="Diabetes Prediction API",
    description="Machine Learning API for predicting diabetes risk based on patient health metrics",
    version="1.0.0"
)

origins = [
    "http://localhost:5173",  # Vite default React dev server
    "http://127.0.0.1:5173",
    "http://localhost:3000",  # CRA dev server (if using create-react-app)
    # Production frontend
    "https://diabeticspredictor.project.shoileabdulazeez.tech",
    "https://your-frontend-domain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # Allowed domains
    allow_credentials=True,
    allow_methods=["*"],          # Allow all HTTP methods (POST, GET, etc.)
    allow_headers=["*"],          # Allow all headers
)

# Load the trained model (now that custom function is defined)
try:
    model = joblib.load("final_model.pkl")
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Define input data schema using Pydantic
class PatientData(BaseModel):
    """
    Patient health metrics for diabetes prediction
    """
    pregnancies: int = Field(..., ge=0, le=20, description="Number of pregnancies")
    glucose: float = Field(..., ge=0, le=300, description="Glucose level (mg/dL)")
    blood_pressure: float = Field(..., ge=0, le=200, description="Blood pressure (mmHg)")
    skin_thickness: float = Field(..., ge=0, le=100, description="Skin thickness (mm)")
    insulin: float = Field(..., ge=0, le=1000, description="Insulin level (μU/mL)")
    bmi: float = Field(..., ge=0, le=80, description="Body Mass Index")
    diabetes_pedigree_function: float = Field(..., ge=0, le=3, description="Diabetes pedigree function")
    age: int = Field(..., ge=1, le=120, description="Age in years")

    class Config:
        json_schema_extra = {
            "example": {
                "pregnancies": 5,
                "glucose": 120,
                "blood_pressure": 80,
                "skin_thickness": 25,
                "insulin": 100,
                "bmi": 28.5,
                "diabetes_pedigree_function": 0.5,
                "age": 35
            }
        }

# Define response schema
class PredictionResponse(BaseModel):
    """
    Diabetes prediction response
    """
    prediction: int = Field(..., description="Prediction: 0 = No Diabetes, 1 = Diabetes")
    probability: float = Field(..., description="Probability of having diabetes (0-1)")
    risk_level: str = Field(..., description="Risk level: Low, Medium, or High")

@app.get("/")
async def root():
    """
    Welcome endpoint
    """
    return {
        "message": "Welcome to Diabetes Prediction API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/health"
    }

@app.get("/health")
async def health_check():
    """
    Health check endpoint
    """
    model_status = "loaded" if model is not None else "not loaded"
    return {
        "status": "healthy",
        "model_status": model_status,
        "api_version": "1.0.0"
    }

@app.post("/predict", response_model=PredictionResponse)
async def predict_diabetes(patient_data: PatientData):
    """
    Predict diabetes risk for a patient
    
    Args:
        patient_data: Patient health metrics
        
    Returns:
        Prediction result with probability and risk level
    """
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded")
    
    try:
        # Convert input to DataFrame (matching training data format)
        input_data = pd.DataFrame([{
            'Pregnancies': patient_data.pregnancies,
            'Glucose': patient_data.glucose,
            'BloodPressure': patient_data.blood_pressure,
            'SkinThickness': patient_data.skin_thickness,
            'Insulin': patient_data.insulin,
            'BMI': patient_data.bmi,
            'DiabetesPedigreeFunction': patient_data.diabetes_pedigree_function,
            'Age': patient_data.age
        }])
        
        # Make prediction
        prediction = model.predict(input_data)[0]
        
        # Get prediction probability
        probability = model.predict_proba(input_data)[0][1]  # Probability of diabetes (class 1)
        
        # Determine risk level
        if probability < 0.3:
            risk_level = "Low"
        elif probability < 0.7:
            risk_level = "Medium"
        else:
            risk_level = "High"
        
        return PredictionResponse(
            prediction=int(prediction),
            probability=round(float(probability), 4),
            risk_level=risk_level
        )
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Prediction error: {str(e)}")

@app.post("/predict_batch")
async def predict_batch(patients: list[PatientData]):
    """
    Predict diabetes risk for multiple patients
    
    Args:
        patients: List of patient health metrics
        
    Returns:
        List of prediction results
    """
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded")
    
    if len(patients) > 100:
        raise HTTPException(status_code=400, detail="Maximum 100 patients allowed per batch")
    
    try:
        results = []
        for patient_data in patients:
            # Convert to DataFrame
            input_data = pd.DataFrame([{
                'Pregnancies': patient_data.pregnancies,
                'Glucose': patient_data.glucose,
                'BloodPressure': patient_data.blood_pressure,
                'SkinThickness': patient_data.skin_thickness,
                'Insulin': patient_data.insulin,
                'BMI': patient_data.bmi,
                'DiabetesPedigreeFunction': patient_data.diabetes_pedigree_function,
                'Age': patient_data.age
            }])
            
            # Make prediction
            prediction = model.predict(input_data)[0]
            probability = model.predict_proba(input_data)[0][1]
            
            # Risk level
            if probability < 0.3:
                risk_level = "Low"
            elif probability < 0.7:
                risk_level = "Medium"
            else:
                risk_level = "High"
            
            results.append({
                "prediction": int(prediction),
                "probability": round(float(probability), 4),
                "risk_level": risk_level
            })
        
        return {"predictions": results, "count": len(results)}
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Batch prediction error: {str(e)}")

@app.get("/model_info")
async def get_model_info():
    """
    Get information about the loaded model
    """
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded")
    
    try:
        model_type = type(model).__name__
        return {
            "model_type": model_type,
            "features": [
                "Pregnancies", "Glucose", "BloodPressure", "SkinThickness",
                "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"
            ],
            "target": "Outcome (0: No Diabetes, 1: Diabetes)",
            "model_file": "final_model.pkl"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error getting model info: {str(e)}")

if __name__ == "__main__":
    # Run the API server
        # Moved to ML/main.py
        uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
