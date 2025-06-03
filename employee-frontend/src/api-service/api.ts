import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeeBaseApi = createApi({
    //all the cached states would be stored in this path
    reducerPath : "employeeApi",
    baseQuery : fetchBaseQuery({
        baseUrl: "http://localhost:3000", // same as server
        prepareHeaders: (headers) => {
           const token = localStorage.getItem("token") 
           
           if (token) {
            headers.set("Authorization", `Bearer ${token}`)
           }
           return headers
        }
    }),
    refetchOnMountOrArgChange : true,
    refetchOnReconnect : true,
    endpoints : () => ({}),
    tagTypes: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
})

export default employeeBaseApi