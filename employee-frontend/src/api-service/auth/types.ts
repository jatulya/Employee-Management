import type {  Role } from "../../store/employee/employee.types"

export type LoginResponse =  {
   tokenType : string,
   accessToken : string
}

export type LoginPayload = {
    email : string,
    password : string
}