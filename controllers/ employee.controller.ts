import EmployeeService from "../services/employee.service";
import {Request, Response,Router } from 'express'

export default class EmployeeController {
    constructor (private employeeService : EmployeeService, router : Router) {
        router.post("/", this.createEmployee.bind(this))
        router.get("/", this.getAllEmployees.bind(this))
        router.get("/:id", this.getEmployeeById.bind(this))
        router.put("/:id", this.updateEmployee)
        router.delete("/:id", this.deleteEmployee.bind(this))
    }

    async createEmployee(req : Request, resp : Response) {
        const email = req.body.email
        const name = req.body.name
        const newEmployee = await this.employeeService.createEmployee(email, name)
        resp.status(201).send(newEmployee)
    }

    async getAllEmployees(req : Request, resp : Response){
        const employees = await this.employeeService.getAllEmployees()
        resp.status(200).send(employees)
    }

    async getEmployeeById(req : Request, resp : Response){
        const id = Number(req.params.id)
        const employee = await this.employeeService.getEmployeeById(id)
        resp.status(200).send(employee)
    }

    updateEmployee = async(req : Request, resp : Response) => {
        const id = Number(req.params.id)
        const email = req.body.email
        const name = req.body.name
        await this.employeeService.updateEmployee(id, name, email)
        resp.status(200).send()
    }

    async deleteEmployee(req : Request, resp : Response){
        const id = Number(req.params.id)
        await this.employeeService.deleteEmployee(id)
        resp.status(204).send()
    }
}