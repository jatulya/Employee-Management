
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
            ref, disabled} : {
    id : string,
    label : string,
    type : string,
    value? : string,
    placeholder : string,
    classname? : string,
    onChange? : (event : React.ChangeEvent<HTMLInputElement>) => void ,
    endAdornment? : React.ReactNode | null, 
    ref? : React.RefObject<HTMLInputElement | null>,
    disabled? : boolean
}) => {
    return (
        <div className={`input-div-${classname}`}>
            <label htmlFor = {id} className={`label-${classname}`}>{label}</label>
            <input 
                id={id}
                value={value}
                className={`input-element varient-${classname}`} 
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