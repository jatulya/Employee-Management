import { Router } from "express";
import Employee from "./Employee";

export const employeeRouter = Router()


let employees : Employee[] = [
    {
        id : 1,
        email : "jazz@jazz.com",
        name : "Jazz",
        createdAt : new Date(),
        updatedAt : new Date(),
    }, 
    {
        id : 2,
        email : "john@gmail.com",
        name : "John",
        createdAt : new Date(),
        updatedAt : new Date(),
    }
]

employeeRouter.get('/', (req, res)=> {
    res.status(200).send(employees)
})

employeeRouter.get("/:id", (req, res)=> {

    const id = req.params.id
    const emp = employees.find((emp)=> emp.id == Number(id) )
    res.status(200).send(emp)
    //console.log("Get Employees-id endpoint successfully executed")

})

employeeRouter.post('/', (req, res) => {

    //add server.use(express.json()) to get values from body of the post request
    const emp = new Employee()
    emp.name = req.body.name
    emp.email = req.body.email
    emp.id = employees.length + 1
    emp.createdAt = new Date()
    emp.updatedAt = new Date()
    employees.push(emp)

    res.status(201).send("employeeRouter - Employee Created")
})

// employeeRouter.delete("/:id", (res, req) => {
//     console.log("Deleting employees")

// })
