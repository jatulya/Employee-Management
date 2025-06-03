import {  Header, Text } from "../../../components"
import './EmployeeList.css'
import Actions from "./Action"
import { useState } from "react"
import DeleteModal from "../../Modal/Modal"
import { useNavigate } from "react-router-dom"
import { useGetEmployeeListQuery } from "../../../api-service/employees/employees.api"


const EmployeeList = () => {
    const headings : string[] = ["Employee Name", "Employee ID", "Joining Date", "Role", "Status", "Experience", "Action"]
    
    // const employees : any = useAppSelector(state => state.employee.employees)
    const {data} = useGetEmployeeListQuery({})
    const employees = data
    console.log("Data : ", data)
    
    
    const navigate = useNavigate()
    const moveToEmployeeDetails = (id : string) => {
        navigate(`${id}`)
    }

    // const [showDelete, setShowDelete] = useState<boolean>(false)
    
    return (<>
        <Header heading="Employee List" filter={true} icon="Create"/>
        <div >
            <ul className="rows headings">
                {headings.map((item, key) => {
                    return( 
                        <li >
                            {item}
                        </li>
                    )
                })}
            </ul>

            { employees ? 
              employees.map((employee : any) => {
                return(<><ul className="rows employees"
                onClick={() => { moveToEmployeeDetails(employee.id) }}>
                    <li><Text text={employee.name}/></li>
                    <li><Text text={employee.employeeId} /></li>
                    <li><Text text={employee.dateOfJoining} /></li>
                    <li><Text text={employee.role} /></li>
                    <li><Text text={employee.status} /></li>
                    <li><Text text={employee.experience} /></li>
                    <li><Actions id={employee.id} /></li>
                </ul>                              
                </>
                )
            }) : <></>}

            
        </div>
    </>)
}

export default EmployeeList