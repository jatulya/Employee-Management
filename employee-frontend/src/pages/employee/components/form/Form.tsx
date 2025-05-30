import { useLocation } from "react-router-dom"
import { Header, Input, Select, Buttons } from "../../../../components"
import type { selectOptions } from "../../../../types/interfaces"

const Form = ({task} : {task : "Create" | "Edit"}) => {

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
        <form className="form-element" >
            <section className="row">
                <Input id='Employee-name' type='text' placeholder='Employee name' label='Employee name'/>
                <Input id='date' type='date' placeholder='Joining date' label='Joining date' />
                <Input id="Experience" placeholder='Experience' type='number' label="Experience" />
            </section>

            <section className="row">
                <Select label='Department' name="Department" id="department" options ={selectDept }  classname="boxes" />
                <Select label='Status' name="status" id="status" options ={selectStatus }  classname="boxes" />
                <Select label='Role' name="Role" id="Role" options ={selectRoles }  classname="boxes"/>                
            </section>

            <section className="row" >
                <section className="address">
                    <Input id="HouseNo"placeholder='House No.' type='text' label="Address"  classname="boxes"/>
                    <Input id="line1"placeholder='Line 1' type='text' label=""  classname="boxes"/>
                    <Input id="line2" placeholder='Line 2' type='text' label=""  classname="boxes"/>            
                </section>
                <Input id='Employee-id' type='text' placeholder='Employee ID' label='Employee ID' disabled = {task === "Edit" ? true : false}/>
            </section>
            

            <section className="button">
                <Buttons value={task==="Edit" ? "Save" : "Create"} type='submit' onChange={()=>{}}/>
                <Buttons value='Cancel' type='reset' onChange={()=>{}}/>
            </section>
            
        </form>
    </>)
}

export default Form