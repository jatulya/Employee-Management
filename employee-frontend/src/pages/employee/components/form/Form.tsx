import { useNavigate, useParams } from "react-router-dom"
import { Header, Input, Select, Buttons } from "../../../../components"
import type { selectOptions } from "../../../../types/interfaces"
import { useState, type FormEvent, useEffect } from "react"
import { EMPLOYEE_ACTION_TYPES, type Employee } from "../../../../store/employee/employee.types"
import { useAppDispatch } from "../../../../store/store"
import { addEmployee } from "../../../../store/employee/employeeReducer"
import { useCreateEmployeeMutation, useEditEmployeeMutation, useGetEmployeeDetailsQuery } from "../../../../api-service/employees/employees.api"

const Form = ({ task }: { task: "Create" | "Edit" }) => {

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const { id } = useParams()
    const { data } = useGetEmployeeDetailsQuery(id)

    const [createEmployee, { isLoading }] = useCreateEmployeeMutation()
    const [editEmployee, { isLoading: isEditLoading }] = useEditEmployeeMutation()

    const navigate = useNavigate()

    const [values, setValues] = useState<Employee>({
        name: "",
        age: 0,
        email: "",
        password: "",
        employeeId: "",
        dateOfJoining: "",
        department_id: 1,
        role: "DEVELOPER",
        status: "ACTIVE",
        experience: 0,
        address: {
            line1: "",
            line2: "",
            house_no: "",
            pincode: ""
        }
    })
    useEffect(() => {
        if (id && task === "Edit" && data) {
            console.log("Employee : ", data)
            console.log(`User id : `, id)
            setValues({
                name: data.name || "",
                email: data.email || "",
                age: Number(data.age) || 0,
                password: "",
                employeeId: data.employeeId || "",
                dateOfJoining: formatDate(data.dateOfJoining) || "",
                department_id: data.department_id || 1,
                role: data.role || "DEVELOPER",
                status: data.status || "ACTIVE",
                experience: Number(data.experience) || 0,
                address: {
                    line1: data.address.line1 || "",
                    line2: data.address.line2 || "",
                    house_no: data.address.house_no || "",
                    pincode: data.address.pincode || "",
                }
            });
        }
    }, [data]);

    const updateField = (field: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValues({
            ...values,
            [field]: event.target.value,
        });
    };

    const updateAddressField = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => {
            return {
                ...prev,
                address: {
                    ...prev.address,
                    [field]: event.target.value
                }
            }
        })
    }

    const submitFunction = async (e: FormEvent) => {
        e.preventDefault()

        const age = values.age
        const deptId = values.department_id
        const experience = values.experience
        const payload = {
            ...values,
            age: Number(age),
            department_id: Number(deptId),
            experience: Number(experience)
        }


        if (task === 'Create') {
            createEmployee(payload)
                .unwrap()
                .then((response) => {
                    console.log("New employe created : ", response.status)
                    navigate('/employee')
                }).catch((error) => {
                    console.log("Error : ", error)
                })
        } else {
            editEmployee({ id, payload })
                .unwrap()
                .then((response) => {
                    console.log("Employe updated : ", response.status)
                    navigate('/employee')
                }).catch((error) => {
                    console.log("Error from updatio : ", error)
                })
        }

    }

    const selectStatus: selectOptions[] = [
        { value: "ACTIVE", text: "ACTIVE" },
        { value: "INACTIVE", text: "INACTIVE" },
        { value: "PROBATION", text: "PROBATION" }
    ]

    const selectRoles: selectOptions[] = [
        { value: "HR", text: "HR" },
        { value: "DEVELOPER", text: "DEVELOPER" },
        { value: "UI", text: "UI" },
        { value: "UX", text: "UX" }
    ]

    const selectDept: selectOptions[] = [
        { value: 1, text: "Marketing" },
        { value: 2, text: "Software" },
        { value: 3, text: "Finance" },
        { value: 4, text: "Design" }
    ]

    return (<>
        <Header heading={`${task} Employee`} filter={false} />
        <form className="form-element" onSubmit={submitFunction} >
            <section className="row">
                <Input
                    id='employeeName'
                    value={values.name}
                    type='text'
                    placeholder='Employee name'
                    label='Employee name'
                    onChange={(e) => updateField("name", e)}
                />

                <Input
                    id='date'
                    type='date'
                    placeholder='Joining date'
                    label='Joining date'
                    value={values.dateOfJoining}
                    onChange={(e) => updateField("dateOfJoining", e)} />

                <Input
                    id="Experience"
                    placeholder='Experience'
                    type='number'
                    label="Experience"
                    value={values.experience.toString()}
                    onChange={(e) => updateField("experience", e)}
                />
            </section>

            <section className="row">
                <Input
                    id='age'
                    value={values.age.toString()}
                    type='number'
                    placeholder='Employee Age'
                    label='Employee Age'
                    onChange={(e) => updateField("age", e)}
                />

                <Input
                    id='email'
                    type='text'
                    placeholder='Email'
                    label='Email'
                    value={values.email}
                    onChange={(e) => updateField("email", e)} />

                <Input
                    id="password"
                    placeholder='Password'
                    type='password'
                    label="Password"
                    disabled={task === "Edit" ? true : false}
                    onChange={(e) => updateField("password", e)}
                />
            </section>

            <section className="row">
                <Select
                    label='Department'
                    name="Department"
                    id="department"
                    options={selectDept}
                    value={values.department_id}
                    classname="boxes"
                    onChange={(e) => updateField("department_id", e)} />

                <Select
                    label='Status'
                    name="status"
                    id="status"
                    options={selectStatus}
                    classname="boxes"
                    value={values.status}
                    onChange={(e) => updateField("status", e)} />

                <Select
                    label='Role'
                    name="Role"
                    id="Role"
                    options={selectRoles}
                    value={values.role}
                    onChange={(e) => updateField("role", e)} classname="boxes" />
            </section>

            <section className="row" >
                <section className="address">
                    <Input
                        id="House_no"
                        placeholder='House No.'
                        type='text'
                        label="Address"
                        classname="boxes"
                        value={values.address.house_no}
                        onChange={(e) => updateAddressField("house_no", e)}
                    />

                    <Input
                        id="line1"
                        placeholder='Line 1'
                        type='text'
                        label=""
                        classname="boxes"
                        value={values.address.line1}
                        onChange={(e) => updateAddressField("line1", e)}

                    />

                    <Input
                        id="line2"
                        placeholder='Line 2'
                        type='text'
                        label=""
                        classname="boxes"
                        value={values.address.line2}
                        onChange={(e) => updateAddressField("line2", e)}
                    />
                </section>

                <Input
                    id="pincode"
                    placeholder='Pincode'
                    type='text'
                    label="Pincode"
                    classname="boxes"
                    value={values.address.pincode}
                    onChange={(e) => updateAddressField("pincode", e)}
                />

                <Input
                    id='Employee-id'
                    type='text'
                    placeholder='Employee ID'
                    label='Employee ID'
                    disabled={task === "Edit" ? true : false}
                    value={values.employeeId}
                    onChange={(e) => updateField("employeeId", e)}
                />
            </section>


            <section className="button">
                <Buttons value={task === "Edit" ? "Save" : "Create"} disabled={false}
                    type='submit' onChange={() => { }} />
                <Buttons value='Cancel' type='reset' onChange={() => { }} disabled={false} />
            </section>

        </form>
    </>)
}

export default Form

/* 
[{"target":{"name":"Vanditha","age":30,"email":"vandhitha@gmail.com","password":"vandhuthitha","employeeId":"emp45","dateOfJoining":"2025-06-05","department_id":3,"role":"HR","status":"INACTIVE","experience":1,"address":{"line1":"hi ","line2":"smart city","houseNo":"vandhu home","pincode":"686859"}},"value":{"line1":"hi ","line2":"smart city","houseNo":"vandhu home","pincode":"686859"},"property":"address","children":[{"target":{"line1":"hi ","line2":"smart city","houseNo":"vandhu home","pincode":"686859"},"property":"house_no","children":[],"constraints":{"isString":"house_no must be a string","isNotEmpty":"house_no should not be empty"}}]}]
*/