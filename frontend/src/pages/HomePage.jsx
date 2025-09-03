import React from "react"
import Footer from "../components/Footer"
import Logo from "../assets/Logo"
import { Link } from "react-router-dom"


const HomePage = () => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Logo />
                    <h1 className="text-4xl font-bold">DiabetesAI Predictor</h1>
                </div>
                <p className="text-xl text-center max-w-2xl mx-auto mb-6">
                    Advanced machine learning technology to assess diabetes risk based on key health indicators
                </p>

                <div className="flex justify-center gap-7 mb-6">
                    <span className="text-md">Machine Learning</span>
                    <span className="text-md">Data-Driven</span>
                    <span className="text-md">Health Analytics</span>
                </div>
                <div className="flex justify-center items-center">
                    <Link
                        to="/predict"
                        className="bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
                        hover:bg-green-600 hover:shadow-lg transition-all duration-300"
                    >
                        Start Prediction
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8  max-w-6xl mx-aut">
                    <h4 className="font-black text-sm">AI-Powered Analysis</h4>
                    <p className="text-gray-500">Our machine learning model analyzes multiple health parameters to provide accurate diabetes risk assessment.</p>
                </div>
            </div>
        </main>
    )
}

export default HomePage;
