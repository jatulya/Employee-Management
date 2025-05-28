import { useParams } from "react-router-dom"
import { Header } from "../../components"

const EmployeeDetails = () => {
    const {id} = useParams()

    return <Header heading={`Details of the Employee --> ${id}`} />
}

export default EmployeeDetails