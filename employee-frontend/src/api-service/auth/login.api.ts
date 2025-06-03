import employeeBaseApi from "../api";
import type { LoginPayload, LoginResponse } from "./types";

export const loginApi = employeeBaseApi.injectEndpoints({
    endpoints : (builder) => ({
        login: builder.mutation<LoginResponse, LoginPayload>({
            query: (payload) => ({
                url: "/auth/login", //the login endpoint is defined in this path at server
                method: "POST",
                body: payload
            })
        })
    })
})

export const {useLoginMutation} = loginApi