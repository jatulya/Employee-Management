import { useParams } from "react-router-dom"
import { Header, Text } from "../../../components"
import DetailName from "./components/detail-name/DetailName"
import type { EmployeeDetailsType } from "../../../types/interfaces"
import './EmployeeDetails.css'
import {employees } from './components/employee'

const EmployeeDetails = () => {

    const {id} = useParams()
    const employee  = employees.find({}) 
 
    return <>
        
        {employee ? <>    
                <Header heading={`Employee Details `} filter={false} icon="Edit" /> 
                <div className="box">
                    <div className="details">
                        <DetailName name="Employee Name" />
                        <Text text={employee["Employee Name"]} />
                    </div>
                    <div className="details">
                        <DetailName name="Joining Date" />
                        <Text text={employee["Joining Date"]} />
                    </div>
                    <div className="details">
                        <DetailName name="Experience" />
                        <Text text={employee["Experience"]} />
                    </div>
                    <div className="details">
                        <DetailName name="Role" />
                        <Text text={employee["Role"]} />
                    </div>
                    <div className="details">
                        <DetailName name="Status" />
                        <Text text={employee["Status"]} />
                    </div>
                    <div className="details">
                        <DetailName name="Address" />
                        <Text text={employee["Address"]} />
                    </div>
                    <div className="details">
                        <DetailName name="Employee ID" />
                        <Text text={employee["Employee ID"]} />
                    </div>
                </div> 
            </> : 
            <Header heading={`Employee Not Found`} filter={false}/>}  
    </>
}

export default EmployeeDetails