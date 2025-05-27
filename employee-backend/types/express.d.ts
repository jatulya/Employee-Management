import { JwtPayload } from "../dto/jwtPayload";

declare global {
    namespace Express {
        interface Request{
            user? : JwtPayload
        }
    }
}