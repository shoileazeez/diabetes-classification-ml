import AIIcon from "../assets/AIIcon";
import InstanceIcon from "../assets/InstanceIcon";
import ResultIcon from "../assets/ResultIcon";
const Features = () => {
    const features = [
        {
            icon:<AIIcon/>,
            title: "AI-Powered Analysis",
            description:"Our machine learning model analyzes multiple health parameters to provide accurate diabetes risk assessment."
        },
        {
            icon:<InstanceIcon/>,
            title: "Evidence-Based",
            description: "Trained on the comprehensive Pima Indian Diabetes Database from Kaggle, ensuring reliable predictions."
        },
        {
            icon: <ResultIcon/>,
            title: "Instant Results",
            description: "Get immediate risk assessment results with detailed probability scores and recommendations."
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => (
               <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-4 
                 hover:bg-white  
                 transition-all duration-300 group shadow-md 
                 hover:shadow-lg transform hover:-translate-y-2"
                >
                    <div className="flex items-center gap-4 mb-4">
                        {/* Icon */}
                        <div className="text-2xl lg:text-3xl text-black">
                            {feature.icon}
                        </div>
                        {/* Title */}
                        <h3 className="text-sm lg:text-sm font-small text-black">
                            {feature.title}
                        </h3>
                    </div>
                        {/* Description */}
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base font-normal">
                    {feature.description}
                    </p>
                </div>
            ))}
        </div>

    );

}
export default Features;