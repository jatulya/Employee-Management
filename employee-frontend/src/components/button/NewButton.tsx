import { type NewButtonProps } from "../../types/props";
import './Button.css'

function NewButton ({children, variant, type} : NewButtonProps) {
    // primary - all buttons
    //secondary - green buttons
    const buttonClass = variant === 'primary' ?
           'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 ' :
           'bg-green-500'   
    return (
        <div className={`text-white rounded-lg px-4 py-2 flex w-32 h-10 items-center justify-center font-bold ${buttonClass}`}>
            <button 
                type={type}             
            >
                {children}
            </button>
        </div>
    )
}

export default NewButton