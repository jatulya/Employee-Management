import {mock, MockProxy} from 'jest-mock-extended'
import {when} from 'jest-when'
import EmployeeRepository from '../../repositories/employee.repository'
import EmployeeService from '../../services/employee.service'
import Employee from '../../entities/employee.entity'

describe('EmployeeService', () =>{
    //the emp-service is dependent on employeeRepository. So we need to create mockups for tha
    let employeeRepository : MockProxy<EmployeeRepository>
    let employeeService :EmployeeService

    beforeEach(() => {
        employeeRepository = mock<EmployeeRepository>()
        employeeService = new EmployeeService(employeeRepository) // the one we are testing
    })

    describe('getEmployeeById', () => {

        it('Should return value when user with proper id exists', async () => {
            const mockEmployee = {id : 123, name : "Employee1"} as Employee
            when(employeeRepository.findOneById).calledWith(1).mockReturnValue(mockEmployee)

            const result = await employeeService.getEmployeeById(1)
            expect(result).toStrictEqual(mockEmployee)
            expect(employeeRepository.findOneById).toHaveBeenCalledWith(1)
        })

        it('Should throw erro when user provided id does not exist', async() => {
            when(employeeRepository.findOneById).calledWith(2).mockReturnValue(null)

            expect(employeeService.getEmployeeById(2)).rejects.toThrow("Employee not found")
            expect(employeeRepository.findOneById).toHaveBeenCalledWith(2)
        })
       
    })
})