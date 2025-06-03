import { useNavigate } from 'react-router-dom'
import './EmployeeList.css'
import type { Employee } from '../../../store/employee/employee.types'
import { useState } from 'react'
import DeleteModal from '../../Modal/Modal'

const Actions = ({ id} : {
    // setShowDelete:React.Dispatch<React.SetStateAction<boolean>>, 
    id : number
    }) => {
    const navigate = useNavigate()

    const [showDelete, setShowDelete] = useState<boolean>(false)

    const handleDeleteClick = (e:any) => {
        e.stopPropagation()
        setShowDelete(true)     
    }
    const handleEditClick = (e : any) => {
        e.stopPropagation()
        navigate(`${id}/edit`)
        
    }
    return (<>
        <div className="icons">
            <img className="icon" src="../../../assets/delete.png" alt="Delete icon" onClick={handleDeleteClick}/>
            <img className="icon" src="../../../assets/pen.png" alt="Edit icon" onClick={handleEditClick}/>
        </div>
        {
            showDelete ? <DeleteModal setShowDelete = {setShowDelete} id={id}/> : <></>
        }
    </>)
}

export default Actions