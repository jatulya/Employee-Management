import type { LoginInputProps } from '../../types/interfaces'
import './Input.css'

const Input = (props : LoginInputProps) => {
    return (<div className={props.classname}>
        <label className='label'>{props.label}</label>
        <input 
            className='input' 
            type={props.type} placeholder={props.placeholder} onChange={props.onChange} 
            ref={props.ref}
            />
    </div>)
}

export default Input