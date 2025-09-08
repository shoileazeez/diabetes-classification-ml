import react from "react"
import { Link } from "react-router-dom"

const CTA = () => {
    return(
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Ready to Check Your Diabetes Risk?
            </h2>
            <p className="text-gray-500  text-sm lg:text-base font-normal mb-6 mt-4">
                Take the first step towards better health awareness with our AI-powered diabetes prediction tool.
            </p>
            <div>
                <Link to="/predict" 
                className="bg-white text-black text-lg font-medium px-8 py-3 rounded-full shadow-md 
                hover:bg-gray-200 hover:shadow-lg transition-all duration-300 "
                >
                
                    Start Assessment Now
                </Link>
            </div>
            
        </div>
    )
}

export default CTA;