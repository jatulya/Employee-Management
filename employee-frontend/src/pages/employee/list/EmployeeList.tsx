import {  Header, Text } from "../../../components"
import './EmployeeList.css'
import Actions from "./Action"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useGetEmployeeListQuery } from "../../../api-service/employees/employees.api"
import type { Employee } from "../../../store/employee/employee.types"


const EmployeeList = () => {
    const headings : string[] = ["Employee Name", "Employee ID", "Joining Date", "Role", "Status", "Experience"]
    
    const [searchParams, setSearchParams] = useSearchParams();
    const[status, setStatus] = useState<string>("All")
    const { data } = useGetEmployeeListQuery({})  
    const allEmployees = data || []

    useEffect(() => {
        const newStatus = searchParams.get("status");
        setStatus(newStatus ? newStatus : "All");
    }, [searchParams]);

    const employees = status !== 'All' ?
             allEmployees.filter((employee : Employee) => employee.status === status)
              :  allEmployees   
    
    const navigate = useNavigate()
    const moveToEmployeeDetails = (id : string) => {
        navigate(`${id}`)
    }
    
    const accessToken = localStorage.getItem('token')
    const user = accessToken? JSON.parse(atob(accessToken.split(".")[1])) : {};
    console.log(user)

    return (<>
        <Header heading="Employee List" filter={true} icon="Create"/>
        <div >
            <ul className="rows headings">
                {headings.map((item, key) => {
                    return( <>
                        <li > {item} </li>
                    </>  
                    )
                })}
                {
                    user.role === 'HR' ? 
                    <li>Actions</li> :
                    <></>
                }
            </ul>

            { employees ? 
              employees.map((employee : any) => {
                return(<><ul className="rows employees"
                onClick={() => { moveToEmployeeDetails(employee.id) }}>
                    <li><Text text={employee.name}/></li>
                    <li><Text text={employee.employeeId} /></li>
                    <li><Text text={employee.dateOfJoining.slice(0,10)} /></li>
                    <li><Text text={employee.role} /></li>
                    <li><Text text={employee.status} /></li>
                    <li><Text text={employee.experience} /></li>
                    {
                       user.role === 'HR'? 
                        <li><Actions id={employee.id} /></li> :
                        <></>
                    }
                    
                </ul>                              
                </>
                )
            }) : <></>}

            
        </div>
    </>)
}

export default EmployeeList