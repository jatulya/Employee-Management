'use server'

import { ok } from "assert"
import { cookies } from "next/headers"

export const login = async (email : string, password : string) => {
    const path = `${process.env.API_BASE_URL}/auth/login`
    const response = await fetch (path, {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({email, password}),
    })

    if (response.ok){
        const data = await response.json()
        const cookieStore = await cookies()
        cookieStore.set('auth_token', data.accessToken)
        return {
            ok : true,
            token : data.accessToken
        }
    }else {
        return {
            ok:false,
            error : 'Login failed. Please check your credentials'
        }
    }
}