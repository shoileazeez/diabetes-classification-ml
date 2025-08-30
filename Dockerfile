FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install system dependencies for pandas and other scientific libs
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gfortran \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY . .

# Expose port
EXPOSE 8000

# Command to run FastAPI app (dev mode)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

