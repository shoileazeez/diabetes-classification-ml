import react from "react";


const Footer = () => {
    return (
        <div className="bg-gray-50 py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8  max-w-6xl mx-auto">
                <div className="space-y-4">
                    <h3 className="font-semibold text-black text-sm mb-3">DiabetesAI Predictor</h3>
                    <p className="text-gray-500 text-base">Machine learning powered diabetes risk assessment tool using evidence-based health indicators.</p>
                    <div className="flex  flex-wrap gap-2 space-y-2 font-medium">
                        <span className="text-black text-sm ">AI/ML</span>
                        <span className="text-black text-sm">HealthCare</span>
                        <span className="text-black text-sm">Opensource</span>
                    </div>
                </div>
                {/* Project data source */}
                <div className="space-y-4 ">
                    <h4 className=" font-semibold text-black text-sm">Resources</h4>
                    <div>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a 
                                 href="https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 !text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                  Kaggle Diabetes Dataset
                                </a>
                            </li>
                            <li>
                                <a
                                 href="https://github.com/shoileazeez/diabetes-classification-ml"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 !text-gray-500 !hover:text-gray-700 transition-colors" 
                                >
                                    Github Repository Link
                                </a>
                            </li>
                            <li>
                                <a
                                 href="https://stingray-app-rpi8b.ondigitalocean.app/docs"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 !text-gray-500 !hover:text-gray-700 transition-colors" 
                                >
                                    API Documentation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Stack */}
                <div className="space-y-4">
                    <h4 className=" font-semibold text-black text-sm">Technical Stack</h4>
                    <div>
                        <ul className="space-y-2 text-sm text-gray-500 ">
                            <li>• Machine Learning Model</li>
                            <li>• FastAPI Backend</li>
                            <li>• React frontend</li>
                            <li>• Tailwind CSS</li>
                            <li>• Pima Indian Diabetes Dataset</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mb-6"></div>
            <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                    <p>Built with React and Tailwind CSS.</p>
                </div>
                <div className="text-xs text-center sm:text-right">
                    <p>© 2025 DiabetesAI Predictor. Educational purposes only.</p>
                    <p className="mt-1">Dataset: Pima Indian Diabetes Database from kaggle Dataset</p>
                </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-xs text-yellow-800"><strong>Medical Disclaimer:</strong>This tool is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
            </div>
        </div>
    )
}

export default Footer;