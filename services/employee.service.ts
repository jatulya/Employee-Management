import EmployeeRepository from "../repositories/employee.repository";
import Employee, { EmployeeRole } from "../entities/employee.entity";
import Address from "../entities/address.entity";
import { CreateAddressDto } from "../dto/createAddressDto";
import bcrypt from 'bcrypt'

class EmployeeService {
    constructor(private employeeRepository : EmployeeRepository){}

    async createEmployee(name:string, email:string, age:number, address :CreateAddressDto, role : EmployeeRole, password :string) : Promise<Employee>{
            const newAddr = new Address()
            newAddr.line1 = address.line1
            newAddr.pincode = address.pincode

            const newEmployee = new Employee();
            newEmployee.email = email;
            newEmployee.name = name;
            newEmployee.age = age
            newEmployee.address = newAddr
            newEmployee.role = role
            newEmployee.password = await bcrypt.hash(password, 10) //10 -> rounds
            return this.employeeRepository.create(newEmployee)
    }
    
    async getAllEmployees() : Promise<Employee[]>{
        return this.employeeRepository.findMany()
    }

    async getEmployeeById(id:number) : Promise<Employee>{
        return this.employeeRepository.findOneById(id)
    } 

    async getEmployeeByEmail(email:string) : Promise<Employee> {
        return this.employeeRepository.findByEmail(email)
    }

    async updateEmployee(id: number, name:string, email:string){
        const employeeExist = await this.employeeRepository.findOneById(id)
        if (employeeExist){
            const employee = new Employee();
            employee.email = email;
            employee.name = name;
            await this.employeeRepository.update(id, employee)
        }
    }

    async deleteEmployee(id : number) {
        const employeeExist = await this.employeeRepository.findOneById(id)
        if (employeeExist){
            //await this.employeeRepository.delete(id)
            await this.employeeRepository.remove(employeeExist)
        }
    }
}

export default EmployeeService