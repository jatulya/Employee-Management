import express from "express";
import datasource from "../db/data-source";
import Employee from "../entities/employee.entity";
import EmployeeService from "../services/employee.service";
import EmployeeRepository from "../repositories/employee.repository";
import EmployeeController from "../controllers/ employee.controller";
import Department from '../entities/department.entity';
import DepartmentRepository from "../repositories/department.repository";

const employeeRouter = express.Router()

const employeeRepository = new EmployeeRepository(datasource.getRepository(Employee))
const departmentRepository=new DepartmentRepository(datasource.getRepository(Department))
export const employeeService=new EmployeeService(employeeRepository,departmentRepository)
const empployeeController = new EmployeeController(employeeService, employeeRouter)

export default employeeRouter

