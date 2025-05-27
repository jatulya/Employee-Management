import HttpException from "../exceptions/httpException";
import DepartmentService from "../services/department.services";
import {Request, Response,Router, NextFunction } from 'express'
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { authorizationMiddleware } from "../middleware/authorization.middleware";
import { CreateDepartmentDto } from "../dto/createDepartmentDto";
import { LoggerService } from "../services/logger.services";
import { EmployeeRole } from "../entities/employee.entity";

export default class DepartmentController {
    constructor(private departmentService : DepartmentService, router : Router ) {
        router.post("/", 
           authorizationMiddleware([EmployeeRole.HR]),
            this.createDepartment.bind(this))
        router.get("/", this.getAllDepartments.bind(this))
        router.get("/:id", this.getDepartmentById.bind(this))
        router.get("/employees/:id", this.getEmployeesOfDept.bind(this))
        router.delete("/:id",authorizationMiddleware([EmployeeRole.HR]), this.deleteDepartment.bind(this))
    }

    private logger = LoggerService.getInstance('department.controller()')

    async createDepartment(req: Request, resp : Response, next : NextFunction){
        try{
            const createDptDto = plainToInstance(CreateDepartmentDto, req.body)
            const errors =  await validate(createDptDto)

            if (errors.length){
                const stringifErrors = JSON.stringify(errors)

                this.logger.error(`From createDept -> ${stringifErrors}`)
                throw new HttpException(412, "Invalid department name.")
            }

            const newDepartment = await this.departmentService.createDepartment(createDptDto.name)

            resp.status(201).send(newDepartment)
        }catch(error){
            next(error)
        }
    }

    async getAllDepartments(req: Request, resp : Response){
        this.logger.info("Entered getAllDepartments in controller")
        const departments = await this.departmentService.getAllDeparments()
        resp.status(200).send(departments)
    }

    async getDepartmentById(req: Request, resp : Response, next : NextFunction){
        try{
            const id = Number(req.params.id)
            const employee = await this.departmentService.getDepartmentById(id)
            resp.status(200).send(employee)
        }catch(error){
            next(error)
        }
    }

    async getEmployeesOfDept(req: Request, resp : Response, next : NextFunction){
        try{
            const id = Number(req.params.id)
            const employee = await this.departmentService.getDepartmentById(id)
            resp.status(200).send(employee)
        }catch(error){
            next(error)
        }
    }
    async deleteDepartment(req: Request, resp : Response, next : NextFunction){
        const id = Number(req.params.id)
        await this.departmentService.deleteDepartment(id)
        resp.status(204).send()
    }
}