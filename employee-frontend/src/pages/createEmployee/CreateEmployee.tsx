import { Input,  Header, Select, Buttons } from '../../components'
import type { selectOptions } from '../../types/interfaces'
import './CreateEmployee.css'

const CreateEmployee = () => {
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
    return (<>
        <div className="main-div">
          <Header heading='Create Employee' /> 
          <form className="form-element">
            <section className="row">
                <Input classname="boxes" type='text' placeholder='Employee name' label='Employee name'/>
                <Input type='date' placeholder='Joining date' label='Joining date' classname="boxes"/>
                <Input placeholder='Experience' type='number' label="Experience"  classname="boxes"/>
            </section>

            <section className="row">
                <Input placeholder='Department' type='text' label="Department"  classname="boxes"/>
                <Select label='Status' name="status" id="status" options ={selectStatus }  classname="boxes" />
                <Select label='Role' name="Role" id="Role" options ={selectRoles }  classname="boxes"/>                
            </section>
            
            <section className="address">
                <Input placeholder='House No.' type='text' label="Address"  classname="boxes"/>
                <Input placeholder='Line 1' type='text' label=""  classname="boxes"/>
                <Input placeholder='Line 2' type='text' label=""  classname="boxes"/>            
            </section>

            <section className="button">
                <Buttons value="Create" type='submit' />
                <Buttons value='Cancel' type='reset'/>
            </section>
        </form>
    </div>
   </> )
}

export default CreateEmployee