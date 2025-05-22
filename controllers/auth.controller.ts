import HttpException from "../exceptions/httpException";
import AuthService from "../services/auth.service";
import {Router, Request, Response, NextFunction} from 'express'

export default class AuthController {
    constructor(private authService : AuthService, 
                private router : Router){
                    router.post('/login', this.login.bind(this))
                }
    
    async login(req : Request, resp : Response, next : NextFunction) {
        try{    
            const {email, password} = req.body
            if(!email || !password){
                throw new HttpException(400, "Email or Password Not Found");
                
            }
            const data = await this.authService.login(email, password)
            resp.status(200).send(data)
        }
        catch (error){
            next(error)
        }
    }
}