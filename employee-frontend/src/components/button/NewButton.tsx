import { type NewButtonProps } from "../../types/props";
import './Button.css'

function NewButton ({children, variant, type} : NewButtonProps) {

    const buttonColor = variant.color === 'primary' ?
           'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 ' :
           variant.color === 'secondary' ? 'bg-green-600' : 'bg-gray-200'
    
    const buttonSize = variant.size === 'lg' ? 
            'w-96' : variant.size == 'md' ? 
            'w-48' : 'w-32'

    return (
        <div className={`text-white rounded-lg px-4 py-2 flex h-13 items-center justify-center font-bold ${buttonColor} ${buttonSize}`}>
            <button 
                type={type}             
            >
                {children}
            </button>
        </div>
    )
}

export default NewButton