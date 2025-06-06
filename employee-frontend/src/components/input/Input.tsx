import type { LoginInputProps } from '../../types/interfaces'
import './Input.css'

const Input = ({
            id,
            label,
            type = "text",
            classname,
            value,
            onChange,
            variant,
            placeholder,
            endAdornment = null,
            ref, disabled} : LoginInputProps) => {
    return (
        <div className={`input-div-${variant}`}>
            { 
                label !== "" ? 
                    <label htmlFor = {id} className={`label-${variant}`}>{label}</label>
                : <></>
            }
            <input 
                id={id}
                value={value}
                className={`input input-${variant}`} 
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