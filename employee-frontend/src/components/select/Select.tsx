import type { selectProps } from '../../types/interfaces'
import '../input/Input.css'

const Select = (props : selectProps) => {
    return (<div className={props.classname}>
        <label className='label'>{props.label}</label>
        <select className='input' name={props.name} id={props.name} onClick={props.onClick}>
            {props.options.map((item) => {
                return (<>
                    <option value={item.value} selected>{item.text}</option>
                </>)
            })}
        </select>
    </div>)
}

export default Select