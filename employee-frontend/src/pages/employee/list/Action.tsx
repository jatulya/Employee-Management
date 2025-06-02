import { useNavigate } from 'react-router-dom'
import './EmployeeList.css'

const Actions = ({setShowDelete, id} : {setShowDelete:React.Dispatch<React.SetStateAction<boolean>>, id : string}) => {
    const navigate = useNavigate()

    const handleDeleteClick = (e:any) => {
        setShowDelete(true)
        e.stopPropagation()
    }
    const handleEditClick = (e : any) => {
        navigate(`${id}/edit`)
        e.stopPropagation()
    }
    return (<div className="icons">
        <img className="icon" src="../../../assets/delete.png" alt="Delete icon" onClick={handleDeleteClick}/>
        <img className="icon" src="../../../assets/pen.png" alt="Edit icon" onClick={handleEditClick}/>
    </div>)
}

export default Actions