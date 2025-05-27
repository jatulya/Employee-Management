import { Repository } from "typeorm";
import Department from '../entities/department.entity'
import Employee from "../entities/employee.entity";

export default class DepartmentRepository {
    constructor(private repository : Repository<Department> ){}

    async create(department : Department) : Promise<Department> {
        return this.repository.save(department)
    }

    async findAll() : Promise<Department[]> {
        return this.repository.find()
    }

    async findOneById(id : number) : Promise<Department> {
        return this.repository.findOne({where : {id}})
    }

    async findDeptWithEmployees (id:number) : Promise<Department[]> {
        return this.repository.find({where :{id}, relations : { employee : true}})
    }

    async delete (id:number){
        await this.repository.delete(id)
    }
}