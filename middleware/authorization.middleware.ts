import { Request, Response, NextFunction } from "express";
import { EmployeeRole } from "../entities/employee.entity";
import HttpException from "../exceptions/httpException";

export const authorizationMiddleware = (req: Request, resp : Response, next : NextFunction) => {
    const role = req.user?.role
    if (role != EmployeeRole.HR){
        throw new HttpException(403, "No Authorization: User has no privilege to access the resource")
    }
    next()
}