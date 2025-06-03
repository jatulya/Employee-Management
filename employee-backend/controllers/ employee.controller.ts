import HttpException from "../exceptions/httpException";
import EmployeeService from "../services/employee.service";
import {Request, Response,Router, NextFunction } from 'express'
import { plainToInstance } from "class-transformer";
import { CreateEmployeeDto } from "../dto/createEmployeeDto";
import { validate } from "class-validator";
import { authorizationMiddleware } from "../middleware/authorization.middleware";
import { UpdateEmployeeDto } from "../dto/updateEmployeeDto";
import { EmployeeRole } from "../entities/employee.entity";


export default class EmployeeController {
    constructor (private employeeService : EmployeeService, router : Router) {
        router.post("/", authorizationMiddleware([EmployeeRole.HR, EmployeeRole.DEVELOPER]), this.createEmployee.bind(this))
        router.get("/", this.getAllEmployees.bind(this))
        router.get("/:id", this.getEmployeeById.bind(this))
        router.put("/:id",authorizationMiddleware([EmployeeRole.HR]), this.updateEmployee)
        router.delete("/:id",authorizationMiddleware([EmployeeRole.HR]), this.deleteEmployee.bind(this))
    }

    async createEmployee(req : Request, resp : Response, next : NextFunction) {
        try{
            //plainToInstance converts JS obj to an instance of the class CreateEmployeeDto
            //it is easier for class-validation
            const createEmployeeDto = plainToInstance(CreateEmployeeDto, req.body)
            const errors = await validate(createEmployeeDto)

            if (errors.length > 0) {
                console.log(JSON.stringify(errors))
                throw new HttpException(412, JSON.stringify(errors))
            }

            const newEmployee = await this.employeeService.createEmployee(
                createEmployeeDto.name,
                createEmployeeDto.email,                
                createEmployeeDto.employeeId,
                createEmployeeDto.age,
                createEmployeeDto.address,
                createEmployeeDto.role,
                createEmployeeDto.department_id,
                createEmployeeDto.experience,
                createEmployeeDto.dateOfJoining,             
                createEmployeeDto.status,
                createEmployeeDto.password,
            );
            resp.status(201).send(newEmployee)
        }catch(error){
            next(error)
        }
    }

    async getAllEmployees(req : Request, resp : Response){
        console.log(req.user)
        const employees = await this.employeeService.getAllEmployees()
        resp.status(200).send(employees)
    }

    async getEmployeeById(req : Request, resp : Response, next : NextFunction){
        try{
            const id = Number(req.params.id)
            const employee = await this.employeeService.getEmployeeById(id)
            if (!employee){
                throw new HttpException(404,`Employee with the id ${id} does not exist`)
            }
            resp.status(200).send(employee)
        }catch(error ){
            next(error)
        }
    }

    updateEmployee = async(req : Request, resp : Response, next : NextFunction) => {
        try{
            const id = Number(req.params.id)
            const updateEmployeeDto = plainToInstance(UpdateEmployeeDto, req.body)
            const errors = await validate(updateEmployeeDto)

            if (errors.length > 0) {
                console.log(JSON.stringify(errors))
                throw new HttpException(400, JSON.stringify(errors))
            }

            const newEmployee = await this.employeeService.updateEmployee(
                id,
                updateEmployeeDto.name,
                updateEmployeeDto.email,                
                updateEmployeeDto.age,
                updateEmployeeDto.address,
                updateEmployeeDto.role,
                updateEmployeeDto.department_id,
                updateEmployeeDto.experience,                                
                updateEmployeeDto.status,
            );
            resp.status(200).send(newEmployee)
        }catch(error){
            next(error)
        }
    }

    async deleteEmployee(req : Request, resp : Response){
        const id = Number(req.params.id)
        await this.employeeService.deleteEmployee(id)
        resp.status(204).send()
    }
}

// function errorHandler (req, resp, next)  {

// }
