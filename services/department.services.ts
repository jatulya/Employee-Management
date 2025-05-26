import DepartmentRepository from "../repositories/department.repository";
import EmployeeRepository from "../repositories/employee.repository";
import Department from "../entities/department.entity";
import { LoggerService } from "./logger.services";
import datasource from "../db/data-source";
import Employee from "../entities/employee.entity";
import HttpException from "../exceptions/httpException";
import { log } from "winston";

export default class DepartmentService {
    private logger = LoggerService.getInstance('department.services()')

    constructor(private departmentRepository : DepartmentRepository ){}

    async createDepartment(name : string) : Promise<Department>{
        try{
            const employeeExist = await this.getDepartmentByName(name)
            if (employeeExist){
                this.logger.debug("Employee already exists.")
                throw new HttpException(409, "Department Name already exists")
            }
            const newDepartment = new Department()
            newDepartment.name = name
            return this.departmentRepository.create(newDepartment)
        }catch(error){
            this.logger.error(error)
        }
    }

    async getAllDeparments() : Promise<Department[]> {
        return this.departmentRepository.findAll()
    }

    async getDepartmentById(id : number) : Promise<Department> {
        return this.departmentRepository.findOneById(id)
    }

    async getDepartmentByName(name : string) : Promise<Department> {
        return this.departmentRepository.findByName(name)
    }

    async getDeptWithEmployees(id : number) : Promise<Department>{
        return this.departmentRepository.findDeptWithEmployees(id)
    }

    async updateDepartment(id:number, name: string) : Promise<Department>{     
        try{
            const departmentExist = await this.departmentRepository.findOneById(id)
            if (!departmentExist) {}
            const updatedDept = new Department()
            updatedDept.name = name
            await this.departmentRepository.update(id, updatedDept)
            return departmentExist
        }catch(error){}       
    }

    async deleteDepartment(id : number){
       try {
           const departmentExist = await this.departmentRepository.findOneById(id)
           if (!departmentExist){
            throw new HttpException(409, "Invalid ID: No Department with such ID exists")
           }

            return this.departmentRepository.delete(id)
        }catch(error){this.logger.debug("error in deletion")}
    }
}