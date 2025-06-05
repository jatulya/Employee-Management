import { useDeleteEmployeeMutation } from "../../api-service/employees/employees.api"
import { Buttons } from "../../components"
import './Modal.css'

const DeleteModal = ({setShowDelete, id} : {
   
    setShowDelete:React.Dispatch<React.SetStateAction<boolean>>,
    id : number
     }) => {

    console.log("id from delete: ", id)
    const [deleteEmployee, {isLoading}] = useDeleteEmployeeMutation()

    const cancelClick = (e : any) => {
        e.stopPropagation()
        setShowDelete(false)
    }

    const deleteClick = async (e :any) => {
        e.stopPropagation()
        
        deleteEmployee(id)
        .unwrap()
        .then((response) => {
            console.log("Employee Deleted : ", id)
            setShowDelete(false)
        }).catch((error) => {
            console.log("Error in deletion: ", error)
        })
        
    }

    return (
        <div className="modal">
            <div className="modal-div">
                <span className="close" onClick={cancelClick}>&times;</span>
                <div className="modal-content">
                    <h3 className="center">Are You Sure?</h3>
                    <h4 className="sentence">Do you really want to delete employee?</h4>
                    <div className="buttons">
                        <Buttons 
                            varient="primary"
                            value="Confirm" 
                            type="button" 
                            onChange={deleteClick} 
                            disabled={false} 
                            />
                        <Buttons value="Cancel" type="button" onChange={cancelClick} disabled={false}/>
                    </div>
                </div>
                
            </div>
        
    </div>)
}

export default DeleteModal