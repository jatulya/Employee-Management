import {mock, MockProxy} from 'jest-mock-extended'
import {when} from 'jest-when'
import EmployeeRepository from '../../repositories/employee.repository'
import EmployeeService from '../../services/employee.service'
import Employee from '../../entities/employee.entity'

describe('EmployeeService', () => {
    let employeeRepository: MockProxy<EmployeeRepository>
    let employeeService: EmployeeService

    beforeEach(() => {
        employeeRepository = mock<EmployeeRepository>()
        employeeService = new EmployeeService(employeeRepository)
    })

    describe('create', () => {
        it('should save and return the created employee', async () => {
            const mockEmployee = { id: 1, name: 'Jaya' } as Employee
            when(employeeRepository.save).calledWith(mockEmployee).mockResolvedValue(mockEmployee)

            const result = await employeeService.create(mockEmployee)

            expect(result).toStrictEqual(mockEmployee)
        })
    })

    describe('findMany', () => {
        it('should return all employees', async () => {
            const employees = [{ id: 1 }, { id: 2 }] as Employee[]
            when(employeeRepository.find).mockResolvedValue(employees)

            const result = await employeeService.findMany()

            expect(result).toStrictEqual(employees)
        })
    })

    describe('findOneById', () => {
        it('should return an employee with the given ID', async () => {
            const employee = { id: 1 } as Employee
            when(employeeRepository.findOne).calledWith({ where: { id: 1 }, relations: { address: true } }).mockResolvedValue(employee)

            const result = await employeeService.findOneById(1)

            expect(result).toStrictEqual(employee)
        })
    })
})
