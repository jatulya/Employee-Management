import './Button.css'

const Buttons = (props : {value : string, type : "submit"| "reset" | "button", disabled: boolean, onChange :{(event: any) : void}, varient? : string}) => {
    return <button className={`customButtons button--${props.varient}`}  type={props.type} disabled={props.disabled} onClick={props.onChange}>{props.value}</button>
}

export default Buttons