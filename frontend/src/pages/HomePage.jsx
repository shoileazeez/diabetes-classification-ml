import React from "react";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import CTA from "../components/CTA";


const HomePage = () => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Logo />
                    <h1 className="text-4xl font-bold">DiabetesAI Predictor</h1>
                </div>
                <p className="text-gray-500 text-xl text-center max-w-2xl mx-auto mb-6">
                    Advanced machine learning technology to assess diabetes risk based on key health indicators
                </p>

                <div className="flex justify-center gap-7 mb-6">
                    <span className="text-xs font-medium">Machine Learning</span>
                    <span className="text-xs font-medium">Data-Driven</span>
                    <span className="text-xs font-medium">Health Analytics</span>
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
                {/* Features section */}
                <div className="mt-12 mb-12">
                    <Features/>
                </div>
                <div>
                    <HowItWorks/>
                </div>
                <div className="flex items-center justify-center">
                    <CTA/>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                    <Footer/>
            </div>
        </main>
    )
}

export default HomePage;
