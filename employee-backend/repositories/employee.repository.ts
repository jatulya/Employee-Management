import { Repository } from "typeorm";
import Employee from "../entities/employee.entity";
//import employeeRouter from "../employeeRouter";

class EmployeeRepository {
    //private ==> repository is of the class
    //if no private, we have to add this.repository = repository inside the constructor
    constructor(private repository : Repository<Employee> ){}

    async create(employee: Employee) : Promise<Employee> {
        return this.repository.save(employee)
    }

    async findMany() : Promise<Employee[]> {
        return this.repository.find()
    }

    async findOneById(id : number) : Promise<Employee> {
        return this.repository.findOne({where : {id}, relations : {
            address : true,
            department : true
        }})
    }

    async findByEmail(email:string) : Promise<Employee> {
        return this.repository.findOneBy({email})
    }

    async update(id: number, employee: Employee){
        await this.repository.save({id,...employee})
    }

    async delete (id:number){
        await this.repository.softDelete(id)
    }

    async remove(employee : Employee){
        await this.repository.remove(employee)
    }
}

export default EmployeeRepository