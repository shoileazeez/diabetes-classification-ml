# ML Backend (FastAPI + Machine Learning)

This folder contains the backend code for the Diabetes Classification project. It includes the machine learning model, API server, and all backend utilities.

## 📦 Contents
- `main.py` — FastAPI application for serving predictions
- `test_api.py` — Script for testing API endpoints
- `test.py` — (Optional) Additional backend tests/utilities
- `final_model.pkl` — Trained ML model
- `requirements.txt` — Python dependencies
- `Dockerfile` — Containerization for backend

## 🚀 Getting Started

### 1. Install dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the API server
```bash
python main.py
```

The API will be available at `http://localhost:8000`.

### 3. Test the API
```bash
python test_api.py
```

### 4. API Documentation
Visit `http://localhost:8000/docs` for interactive Swagger UI.

## 🛠️ API Endpoints
- `POST /predict` — Predict diabetes risk for a single patient
- `POST /predict_batch` — Predict for multiple patients
- `GET /health` — Health check
- `GET /model_info` — Model details

## 📝 Notes
- The ML model is trained on the Pima Indian Diabetes Dataset.
- All preprocessing is handled in the pipeline.
- For deployment, use the provided Dockerfile.

---

For more details, see the main project README in the root folder.
