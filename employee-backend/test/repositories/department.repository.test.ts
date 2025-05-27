import { mock, MockProxy, when} from 'jest-mock-extended'
import DepartmentRepository from '../../repositories/department.repository'
import DepartmentService from '../../services/department.services'
import Department from '../../entities/department.entity'

describe('DepartmentService', () => {
    let departmentRepository: MockProxy<DepartmentRepository>
    let departmentService: DepartmentService

    beforeEach(() => {
        departmentRepository = mock<DepartmentRepository>()
        departmentService = new DepartmentService(departmentRepository)
    })

    describe('create', () => {
        it('should save and return the department', async () => {
            const department = { id: 1, name: 'IT' } as Department
            when(departmentRepository.save).calledWith(department).mockResolvedValue(department)

            const result = await departmentService.create(department)

            expect(result).toStrictEqual(department)

        })
    })

    describe('findAll', () => {
        it('should return all departments', async () => {
            const departments = [{ id: 1 }, { id: 2 }] as Department[]
            when(departmentRepository.find).mockResolvedValue(departments)

            const result = await departmentService.findAll()

            expect(result).toStrictEqual(departments)
 
        })
    })

    describe('findOneById', () => {
        it('should return department by ID', async () => {
            const department = { id: 1, name: 'HR' } as Department
            when(departmentRepository.findOne).calledWith({ where: { id: 1 } }).mockResolvedValue(department)

            const result = await departmentService.findOneById(1)

            expect(result).toStrictEqual(department)

        })
    })

    describe('findDeptWithEmployees', () => {
        it('should return departments with employees relation', async () => {
            const departmentsWithEmployees = [
                { id: 1, employee: [{ id: 10, name: 'Jaya' }] },
            ] as Department[]
            when(departmentRepository.find)
                .calledWith({ where: { id: 1 }, relations: { employee: true } })
                .mockResolvedValue(departmentsWithEmployees)

            const result = await departmentService.findDeptWithEmployees(1)

            expect(result).toStrictEqual(departmentsWithEmployees)
        })
    })
})
