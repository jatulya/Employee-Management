import './Text.css'
const Text = ({text} : {text:string}) => {
    function isStatus (value : string) {
        const status : string[] = ["Active", "Inactive", "Probation"]
        return status.includes(value)
    }  
    return <div className={isStatus(text)? `list ${text}` : ""}>{text}</div>
}

export default Text