import type { selectProps } from '../../types/interfaces'
import './Select.css'

const Select = (props : selectProps) => {
    return (
    <div className={`select-${props.variant}-div`}>
        <label>{props.label}</label>
        <select 
            className={`select-${props.variant}`} 
            name={props.name} 
            id={props.name} 
            onChange={props.onChange}
            value={props.value}>
            {props.options.map((item) => {
                return (<>
                    <option value={item.value} selected>{item.text}</option>
                </>)
            })}
        </select>
    </div>)
}

export default Select