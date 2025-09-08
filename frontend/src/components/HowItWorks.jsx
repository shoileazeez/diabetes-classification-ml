import react from "react"


const HowItWorks = () => {
    return (
        <div className="rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center rounded-lg p-6 transition-all duration-300 hover:bg-gray-10 hover:shadow-md hover:-translate-y-2">
                    <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        1
                    </div>
                    <h3 className="text-sm lg:text-sm font-small text-black mb-2">Input Health Data</h3>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base font-normal">
                        Enter your medical parameters like glucose, BMI, and blood pressure
                    </p>
                </div>
                <div className="text-center rounded-lg p-6 transition-all duration-300 hover:bg-gray-10 hover:shadow-md hover:-translate-y-2">
                    <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        2
                    </div>
                    <h3 className="text-sm lg:text-sm font-small text-black mb-2">AI Analysis</h3>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base font-normal">
                        Our ML model processes your data using advanced algorithms
                    </p>
                </div>
                <div className="text-center rounded-lg p-6 transition-all duration-300 hover:bg-gray-10 hover:shadow-md hover:-translate-y-2">
                    <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        3
                    </div>
                    <h3 className="text-sm lg:text-sm font-small text-black mb-2">Risk Assessment</h3>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base font-normal">
                        Receive probability scores and risk level classification
                    </p>
                </div>
                <div className="text-center rounded-lg p-6 transition-all duration-300 hover:bg-gray-10 hover:shadow-md hover:-translate-y-2">
                    <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        4
                    </div>
                    <h3 className="text-sm lg:text-sm font-small text-black mb-2">Get insight</h3>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base font-normal ">
                        Understand your results with detailed explanations
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HowItWorks;