import {  Header, Text } from "../../../components"
import './EmployeeList.css'
import Actions from "./Action"
import { useState } from "react"
import DeleteModal from "../../Modal/Modal"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { type Employee, type EmployeeState } from "../../../store/employee/employee.types"


const EmployeeList = () => {
    const headings : string[] = ["Employee Name", "Employee ID", "Joining Date", "Role", "Status", "Experience", "Action"]
    
    const employees : any = useSelector<EmployeeState>(state=> state.employees)
    console.log(`Employee - `,employees)
    
    const navigate = useNavigate()
    const moveToEmployeeDetails = (id : string) => {
        navigate(`${id}`)
    }

    const [showDelete, setShowDelete] = useState<boolean>(false)
    
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
                return(<ul className="rows employees"
                onClick={() => { moveToEmployeeDetails(employee.employeeID) }}>
                    <li><Text text={employee.employeeName}/></li>
                    <li><Text text={employee.employeeID} /></li>
                    <li><Text text={employee.date       } /></li>
                    <li><Text text={employee.Role} /></li>
                    <li><Text text={employee.status} /></li>
                    <li><Text text={employee.experience} /></li>
                    <li><Actions setShowDelete={setShowDelete} id={employee.employeeId} /></li>
                </ul>
                )
            }) : <></>}

            {
                showDelete ? <DeleteModal setShowDelete = {setShowDelete}/> : <></>
            }
        </div>
    </>)
}

export default EmployeeList