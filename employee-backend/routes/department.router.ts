import express from "express";
import datasource from "../db/data-source";
import Department from "../entities/department.entity";
import DepartmentService from "../services/department.services";
import DepartmentRepository from "../repositories/department.repository";
import DepartmentController from "../controllers/department.controller";

const departmentRouter = express.Router()

const departmentRepository = new DepartmentRepository(datasource.getRepository(Department))
export const departmentService = new DepartmentService(departmentRepository)
const departmentController = new DepartmentController(departmentService, departmentRouter)

export default departmentRouter