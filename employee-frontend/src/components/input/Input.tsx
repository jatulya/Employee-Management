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
            ref} : LoginInputProps) => {
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
                />
            {endAdornment ? endAdornment : null}
        </div>)
}

export default Input