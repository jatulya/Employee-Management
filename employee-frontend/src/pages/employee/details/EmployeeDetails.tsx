import { data, useParams } from "react-router-dom"
import { Header, Text } from "../../../components"
import DetailName from "./components/detail-name/DetailName"
import type { EmployeeDetailsType } from "../../../types/interfaces"
import './EmployeeDetails.css'
import {employees } from './components/employee'
import { useGetEmployeeDetailsQuery } from "../../../api-service/employees/employees.api"
import type { Employee } from "../../../store/employee/employee.types"
import { useEffect, useState } from "react"

const EmployeeDetails =  () => {


    const {id} = useParams()
    console.log("ID : ", id)

    const {data : employee} = useGetEmployeeDetailsQuery(id)

    // useEffect (() => {
    //     if (data){
    //         console.log("Employee : ", data)
    //         setEmployee(data)
    //         if (employee){
    //             address1 = `${employee.address.houseNo}, ${employee.address.line1},`
    //             address2 = `${employee.address.line2}, ${employee.address.pincode}`
    //         }
            
    //     } 
    // },[employee])

     
    return <>
        
        {employee ? <>    
                <Header heading={`Employee Details `} filter={false} icon="Edit" /> 
                <div className="box">
                    <div className="details">
                        <DetailName name="Employee Name" />
                        <Text text={employee.name} />
                    </div>
                    <div className="details">
                        <DetailName name="Joining Date" />
                        <Text text={employee.dateOfJoining} />
                    </div>
                    <div className="details">
                        <DetailName name="Experience" />
                        <Text text={employee.experience.toString()} />
                    </div>
                    <div className="details">
                        <DetailName name="Role" />
                        <Text text={employee.role} />
                    </div>
                    <div className="details">
                        <DetailName name="Status" />
                        <Text text={employee.status.toString()} />
                    </div>
                    <div className="details">
                        <DetailName name="Address" />
                        <Text text={`${employee.address.houseNo}, ${employee.address.line1},`} />
                        <Text text={`${employee.address.line2}, ${employee.address.pincode}`} />
                    </div>
                    <div className="details">
                        <DetailName name="Employee ID" />
                        <Text text={employee.employeeId} />
                    </div>
                </div> 
            </> : 
            <Header heading={`Employee Not Found`} filter={false}/>}  
    </>
}

export default EmployeeDetails