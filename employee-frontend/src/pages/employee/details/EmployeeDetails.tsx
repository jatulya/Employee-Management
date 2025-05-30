import { useParams } from "react-router-dom"
import { Header, Text } from "../../../components"
import DetailName from "./components/detail-name/DetailName"
import type { EmployeeDetailsType } from "../../../types/interfaces"
import './EmployeeDetails.css'

const EmployeeDetails = () => {
    const details : EmployeeDetailsType[] = [
        {detailName : "Employee Name", value : "Atulya "}, 
        {detailName : "Joining Date", value : "12.05.2025"},
        {detailName : "Experience", value : "2 yrs"},
        {detailName : "Role", value : "HR"},
        {detailName : "Employee ID", value : "HR@1654"},
        {detailName : "Address", value : "House No: 1, Info Park Road, Kakkanad, 685978"},
        {detailName : "Status", value : "Active"}
    ]
    const {id} = useParams()

    return <>
        <Header heading={`Employee Details `} filter={false} icon="Edit" />
        <div className="box">
            {details.map((item) => (<>
                <div className={"details"}>
                    <DetailName name={item.detailName}/>
                    <Text text={item.value}/>
                </div>       
            </>             
            ))}
        </div>
    </>
}

export default EmployeeDetails