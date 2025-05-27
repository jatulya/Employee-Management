import { Request, Response, NextFunction } from "express";
import { EmployeeRole } from "../entities/employee.entity";
import HttpException from "../exceptions/httpException";

export const authorizationMiddleware = (allowedroles : EmployeeRole[]) => {
    return(req: Request, resp : Response, next : NextFunction) => {
        const role = req.user?.role
        if (!allowedroles.includes(role)){
            console.log(role)
            throw new HttpException(403, "No Authorization: User has no privilege to access the resource")
        }
        next()
    }
}