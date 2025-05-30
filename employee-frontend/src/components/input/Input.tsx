import type { LoginInputProps } from '../../types/interfaces'
import './Input.css'

const Input = ({
            id,
            label,
            type = "text",
            classname,
            value,
            onChange,
            placeholder,
            endAdornment = null,
            ref, disabled} : LoginInputProps) => {
    return (
        <div>
            <label className={`label-${classname}`}>{label}</label>
            <input 
                id={id}
                value={value}
                className={`input input--${classname}`} 
                type={type} 
                placeholder={placeholder}           
                onChange={onChange} 
                ref={ref}
                disabled = {disabled}
                />
            {endAdornment ? endAdornment : null}
        </div>)
}

export default Input