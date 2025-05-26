import { Repository } from "typeorm";
import Department from '../entities/department.entity'

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

    async findDeptWithEmployees (id:number) {
        return this.repository.findOne({where :{id}, relations : { employee : true}})
    }

    async findByName(name:string) : Promise<Department> {
        return this.repository.findOneBy({name})
    }

    async update(id: number, department: Department){
        await this.repository.save({id,...department})
    }

    async delete (id:number){
        await this.repository.softDelete(id)
    }
}