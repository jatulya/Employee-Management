import AuthController from "../controllers/auth.controller";
import AuthService from "../services/auth.service";
import express from 'express'
import { employeeService } from "./employee.router";

const authRouter = express.Router()

const authService = new AuthService(employeeService)
const authController = new AuthController(authService, authRouter)

export default authRouter