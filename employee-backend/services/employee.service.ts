import EmployeeRepository from "../repositories/employee.repository";
import Employee, { EmployeeRole, Status } from "../entities/employee.entity";
import Address from "../entities/address.entity";
import { CreateAddressDto } from "../dto/createAddressDto";
import bcrypt from 'bcrypt'
import { LoggerService } from "./logger.services";
import Department from "../entities/department.entity";
import HttpException from "../exceptions/httpException";
import DepartmentRepository from "../repositories/department.repository";

class EmployeeService {
    private logger = LoggerService.getInstance('employee.services()')
   
    constructor(private employeeRepository : EmployeeRepository, 
        private departmentRepository : DepartmentRepository){ 
         }

    async createEmployee(name:string, email:string, employeeId : string, age:number, address :CreateAddressDto, role : EmployeeRole, department : number, experience : number, dateOfJoining : Date, status : Status, password :string) : Promise<Employee>{
            const dept = await this.departmentRepository.findOneById(department)

            if (!dept){
                throw new HttpException(409, "Invalid Department ID")
            }

            const newAddr = new Address()
            newAddr.line1 = address.line1
            newAddr.pincode = address.pincode
            newAddr.line2 = address.line2
            newAddr.house_no = address.house_no

            const newEmployee = new Employee();
            newEmployee.email = email;
            newEmployee.name = name;
            newEmployee.employeeId = employeeId,
            newEmployee.age = age
            newEmployee.address = newAddr
            newEmployee.role = role
            newEmployee.department = dept
            newEmployee.password = await bcrypt.hash(password, 10) //10 -> rounds
            newEmployee.dateOfJoining = new Date(dateOfJoining),
            newEmployee.experience = experience,
            newEmployee.status =  status
            return this.employeeRepository.create(newEmployee)
    }
    
    async getAllEmployees() : Promise<Employee[]>{
        return this.employeeRepository.findMany()
    }

    async getEmployeeById(id:number) : Promise<Employee>{
        //return this.employeeRepository.findOneById(id)
        let employee = await this.employeeRepository.findOneById(id);
        if (!employee) throw new Error("Employee not found");  
        return employee;
    } 

    async getEmployeeByEmail(email:string) : Promise<Employee> {
        return this.employeeRepository.findByEmail(email)
    }

    async updateEmployee(id: number, name:string, email:string, age:number, address :CreateAddressDto, role : EmployeeRole, department:number, experience : number, status : Status, password :string) : Promise<Employee>{
        try{
            const employeeExist = await this.employeeRepository.findOneById(id)
            if (!employeeExist){
                throw new HttpException(409, "Invalid ID : The user with the given ID doesn't exist")
            }

            const dept = await this.departmentRepository.findOneById(department)

            if (!dept){
                throw new HttpException(409, "Invalid Department ID")
            }
            const existingAddr = employeeExist.address;
            existingAddr.line1 = address.line1
            existingAddr.pincode = address.pincode
            existingAddr.line2 = address.line2
            existingAddr.house_no = address.house_no

            const employee = new Employee();
            employee.email = email;
            employee.name = name;
            employee.age = age
            employee.address = existingAddr
            employee.role = role
            employee.department = dept
            employee.password = await bcrypt.hash(password, 10)
            employee.experience = experience,
            employee.status =  status
            await this.employeeRepository.update(id, employee)

            return employee
        }catch (error){
            this.logger.error("Error in updating employee")
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