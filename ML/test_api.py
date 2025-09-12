import requests
import json

# API endpoint
BASE_URL = "https://shark-app-6cums.ondigitalocean.app/"

def test_health_check():
    """Test the health check endpoint"""
    response = requests.get(f"{BASE_URL}/health")
    print("Health Check:")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_single_prediction():
    """Test single patient prediction"""
    patient_data = {
        "pregnancies": 5,
        "glucose": 120,
        "blood_pressure": 80,
        "skin_thickness": 25,
        "insulin": 100,
        "bmi": 28.5,
        "diabetes_pedigree_function": 0.5,
        "age": 35
    }
    
    response = requests.post(f"{BASE_URL}/predict", json=patient_data)
    print("Single Prediction (Higher Risk):")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_single_prediction_low_risk():
    """Test single patient prediction - Low risk (should return 0)"""
    patient_data = {
        "pregnancies": 1,
        "glucose": 85,
        "blood_pressure": 65,
        "skin_thickness": 15,
        "insulin": 70,
        "bmi": 20.5,
        "diabetes_pedigree_function": 0.2,
        "age": 22
    }
    
    response = requests.post(f"{BASE_URL}/predict", json=patient_data)
    print("Single Prediction (Low Risk - Should be 0):")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_batch_prediction():
    """Test batch prediction"""
    patients = [
        {
            "pregnancies": 0,
            "glucose": 80,
            "blood_pressure": 60,
            "skin_thickness": 12,
            "insulin": 60,
            "bmi": 19.8,
            "diabetes_pedigree_function": 0.15,
            "age": 21
        },
        {
            "pregnancies": 1,
            "glucose": 90,
            "blood_pressure": 70,
            "skin_thickness": 18,
            "insulin": 75,
            "bmi": 22.0,
            "diabetes_pedigree_function": 0.25,
            "age": 28
        },
        {
            "pregnancies": 2,
            "glucose": 110,
            "blood_pressure": 75,
            "skin_thickness": 20,
            "insulin": 80,
            "bmi": 25.5,
            "diabetes_pedigree_function": 0.3,
            "age": 30
        },
        # High risk patient (should predict 1)
        {
            "pregnancies": 8,
            "glucose": 180,
            "blood_pressure": 95,
            "skin_thickness": 35,
            "insulin": 200,
            "bmi": 35.2,
            "diabetes_pedigree_function": 1.2,
            "age": 55
        }
    ]
    
    response = requests.post(f"{BASE_URL}/predict_batch", json=patients)
    print("Batch Prediction (Mix of Risk Levels):")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_model_info():
    """Test model information endpoint"""
    response = requests.get(f"{BASE_URL}/model_info")
    print("Model Info:")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

if __name__ == "__main__":
    print("Testing Diabetes Prediction API")
    print("=" * 50)
    
    try:
        test_health_check()
        test_model_info()
        test_single_prediction()
        test_single_prediction_low_risk()  # New low risk test
        test_batch_prediction()
        
        print("All tests completed successfully!")
        
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to API. Make sure the server is running on http://localhost:8000")
    except Exception as e:
        print(f"Error: {e}")