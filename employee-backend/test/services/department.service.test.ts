import {mock, MockProxy} from 'jest-mock-extended'
import {when} from 'jest-when'
import DepartmentService from '../../services/department.services'
import Department from '../../entities/department.entity'

describe('DepartmentService', () => {
    let departmentRepository: MockProxy<DepartmentRepository>
    let departmentService: DepartmentService

    beforeEach(() => {
        departmentRepository = mock<DepartmentRepository>()
        departmentService = new DepartmentService()
        departmentService['departmentRepository'] = departmentRepository
    })

    describe('createDepartment', () => {
        it('should create and return a department', async () => {
            const department = { id: 1, name: 'Finance' } as Department
            when(departmentRepository.create).calledWith(expect.any(Department)).mockResolvedValue(department)

            const result = await departmentService.createDepartment('Finance')

            expect(result).toStrictEqual(department)
            expect(departmentRepository.create).toHaveBeenCalled()
        })

    })

    describe('getAllDepartments', () => {
        it('should return all departments', async () => {
            const departments = [{ id: 1 }, { id: 2 }] as Department[]
            when(departmentRepository.findAll).mockResolvedValue(departments)

            const result = await departmentService.getAllDeparments()

            expect(result).toStrictEqual(departments)
            expect(departmentRepository.findAll).toHaveBeenCalled()
        })
    })

    describe('getDepartmentById', () => {
        it('should return department if found', async () => {
            const dept = { id: 1, name: 'HR' } as Department
            when(departmentRepository.findOneById).calledWith(1).mockResolvedValue(dept)

            const result = await departmentService.getDepartmentById(1)

            expect(result).toStrictEqual(dept)
            expect(departmentRepository.findOneById).toHaveBeenCalledWith(1)
        })


    })

    describe('getDeptWithEmployees', () => {
        it('should return departments with employees if department exists', async () => {
            const dept = { id: 1, name: 'IT' } as Department
            const resultWithEmployees = [{ ...dept, employee: [{ id: 10 }] }] as Department[]

            when(departmentRepository.findOneById).calledWith(1).mockResolvedValue(dept)
            when(departmentRepository.findDeptWithEmployees).calledWith(1).mockResolvedValue(resultWithEmployees)

            const result = await departmentService.getDeptWithEmployees(1)

            expect(result).toStrictEqual(resultWithEmployees)
            expect(departmentRepository.findOneById).toHaveBeenCalledWith(1)
            expect(departmentRepository.findDeptWithEmployees).toHaveBeenCalledWith(1)
        })
    })
})
