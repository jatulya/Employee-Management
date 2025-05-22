import {Request, Response, NextFunction} from 'express'
import HttpException from '../exceptions/httpException'
import jwt, { JwtHeader } from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/constants'
import { JwtPayload } from '../dto/jwtPayload'

const getToken = (req : Request) : string => {
    const token = req.headers.authorization
    if (!token){
        throw new HttpException(401, "Not authorized")
    }
    
    const tokenSplits = token.split(' ')
    if (tokenSplits.length != 2)
        throw new HttpException(401, "Invalid Token")

    return tokenSplits[1]
}

export const authMiddleware = (req : Request, resp : Response, next : NextFunction) => {  
    const token = getToken(req)
    if (!token){
        throw new HttpException(401, "Not authorized") 
    }
    
    try{
        const payload  = jwt.verify(token, JWT_SECRET) as JwtPayload
        req.user = payload
    }catch(error){
        throw new HttpException(401, "Invalid or expired token")
    }
    next()
}