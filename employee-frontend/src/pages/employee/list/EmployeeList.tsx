import {  Header, Text } from "../../../components"
import './EmployeeList.css'
import Actions from "./Action"

const EmployeeList = () => {
    const headings : string[] = ["Employee Name", "Employee ID", "Joining Date", "Role", "Status", "Experience", "Action"]

    const employees: string[][] = [
    ["Alice Johnson", "EMP001", "2021-03-15", "Software Engineer", "Active", "3 years"],
    ["Bob Smith", "EMP002", "2020-07-01", "Product Manager", "Active", "4 years"],
    ["Charlie Lee", "EMP003", "2019-11-21", "UI/UX Designer", "Probation", "5 years"],
    ["Diana Prince", "EMP004", "2022-05-10", "HR Specialist", "Active", "2 years"],
    ["Ethan Clark", "EMP005", "2018-01-30", "DevOps Engineer", "Inactive", "6 years"]
    ];

    return (<>
        <Header heading="Employee List" filter={true} icon="Create"/>
        <div >
            <ul className="rows headings">
                {headings.map((item) => {
                    return( 
                        <li >
                            {item}
                        </li>
                    )
                })}
            </ul>

            {employees.map((employee) => {
                return(<ul className="rows employees">
                    {employee.map((details) => {
                        return( 
                        <li>
                            <Text text={details}/>
                        </li>
                    )                  
                    })}
                    <Actions />
                </ul>
                )
            })}
        </div>
    </>)
}

export default EmployeeList