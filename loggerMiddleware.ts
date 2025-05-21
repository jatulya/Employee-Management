import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (req : Request, resp : Response, next : NextFunction) => {
    resp.on("finish", () => {
        const status = resp.statusCode
        console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl} ${status}`)
    })
   next()
}

export const processTimeMiddleware = (req : Request, resp : Response, next : NextFunction) => {
    const startTime = Number(new Date())
    resp.on("finish", ()=> {
        const endTime = Number(new Date())
        console.log(`Time taken: ${endTime - startTime} ms`)
    })
    next()
}