import { useLocation } from "react-router-dom"
import { Header, Input, Select, Buttons } from "../../../../components"
import type { EmployeeFormData, selectOptions } from "../../../../types/interfaces"
import { useState, type FormEvent } from "react"
import { EMPLOYEE_ACTION_TYPES, type Employee } from "../../../../store/employee/employee.types"
import { useDispatch } from "react-redux"

const Form = ({task} : {task : "Create" | "Edit"}) => {

    const dispatch = useDispatch()

    const [values,setValues]=useState<Employee>({
          name: "",
          age:0,
          password:"",
          email:"",
          employeeId: "",
          dateOfJoining: "",
          departmentId:"",
          role: 'DEVELOPER',
          status: 'ACTIVE',
          experience: 0,
          address:{
          line1:"",
          line2:"",
          houseNo:"",
          pincode:""
          }
        })

    const updateField = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
        ...values,
        [field]: event.target.value,
        });
    };

    const updateAddressField = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => {
        return {...prev, 
            address: { ...prev.address, 
                        [field]: event.target.value
                    }
                }
        })
    }

    const newFunction = (e:FormEvent) => {
                    e.preventDefault()
                    dispatch({type : EMPLOYEE_ACTION_TYPES.CREATE, payload : {
                employeeName: "one tow",
                date: "12-09-1987",           
                Experience: "2",
                Department: "Finance",      
                status: "Active",         
                Role: "",            
                HouseNo: "cav",
                line1: "3ewc",
                line2: "",
                employeeID: "123456"
            }})
                
    }

    const selectStatus : selectOptions[] = [
        {value : "ACTIVE", text : "ACTIVE"},
        {value : "INACTIVE", text : "INACTIVE"}, 
        {value : "PROBATION", text : "PROBATION"}
    ]
        
    const selectRoles : selectOptions[] = [
        {value : "HR", text : "HR"},
        {value : "DEVELOPER", text : "DEVELOPER"},
        {value : "UI", text : "UI"},
        {value : "UX", text : "UX"}
    ]

    const selectDept : selectOptions[] = [
        {value : "Finance", text : "Finance"},
        {value : "Software", text : "Software"},
        {value : "Marketing", text : "Marketing"},
        {value : "Design", text : "Design"}
    ]

    return (<>
        <Header heading={`${task} Employee`} filter={false}/>
        <form className="form-element" onSubmit={newFunction} >
            <section className="row">
                <Input 
                    id='Employee-name' 
                    type='text'
                    placeholder='Employee name' 
                    label='Employee name' 
                    onChange={(e) => updateField("name", e)}
                    />
                
                <Input id='date' type='date' placeholder='Joining date' label='Joining date' />
                <Input id="Experience" placeholder='Experience' type='number' label="Experience" 
                
                // onChange={(e)=>setPrefilledData({...prefilledData,experience:Number(e.target.value) })}
                />
            </section>

            <section className="row">
                <Select label='Department' name="Department" id="department" options ={selectDept }  classname="boxes" />
                <Select label='Status' name="status" id="status" options ={selectStatus }  classname="boxes" />
                <Select label='Role' name="Role" id="Role" options ={selectRoles }  classname="boxes"/>                
            </section>

            <section className="row" >
                <section className="address">
                    <Input id="HouseNo"placeholder='House No.' type='text' label="Address"  classname="boxes" 
                    // onChange={(e)=>setPrefilledData({...prefilledData,HouseNo:e.target.value })}
                    />
                    <Input id="line1"placeholder='Line 1' type='text' label=""  classname="boxes" //onChange={(e)=>setPrefilledData({...prefilledData,line1:e.target.value })}
                    
                    />
                    <Input id="line2" placeholder='Line 2' type='text' label=""  classname="boxes" //onChange={(e)=>setPrefilledData({...prefilledData,line2:e.target.value })}
                    // 
                    />            
                </section>
                <Input id='Employee-id' type='text' placeholder='Employee ID' label='Employee ID' disabled = {task === "Edit" ? true : false} 
                
                //onChange={(e)=>setPrefilledData({...prefilledData,employeeID:e.target.value })}
                />
            </section>
            

            <section className="button">
                <Buttons value={task==="Edit" ? "Save" : "Create"} type='submit' onChange={()=>{}}/>
                <Buttons value='Cancel' type='reset' onChange={()=>{}}/>
            </section>
            
        </form>
    </>)
}

export default Form