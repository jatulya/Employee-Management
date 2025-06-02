import { Buttons } from "../../components"
import './Modal.css'

const DeleteModal = ({setShowDelete} : {setShowDelete:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const deleteClick = () => {
        setShowDelete(false)
    }

    return (
        <div className="modal">
            <div className="modal-div">
                <span className="close" onClick={()=>setShowDelete(false)}>&times;</span>
                <div className="modal-content">
                    <h3 className="center">Are You Sure?</h3>
                    <h4 className="sentence">Do you really want to delete employee?</h4>
                    <div className="buttons">
                        <Buttons value="Confirm" type="submit" onChange={deleteClick} />
                        <Buttons value="Cancel" type="reset" onChange={()=>setShowDelete(false)} />
                    </div>
                </div>
                
            </div>
        
    </div>)
}

export default DeleteModal