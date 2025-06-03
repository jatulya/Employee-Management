import type { Employee } from "../../store/employee/employee.types";
import employeeBaseApi from "../api";

export const employeeApi =  employeeBaseApi.injectEndpoints({
    endpoints : (builder) => ({

        //because it is querying and keeping the responses as cached, we do not need to specify the response type
        getEmployeeList: builder.query({
            query: () => '/employee', //default method is get, thus not specified
            providesTags : ['EMPLOYEES']
        }),

        getEmployeeDetails : builder.query({
            query: (id) => ({
                url : `/employee/${id}`,
                method : 'GET'
            }),
            providesTags : ['EMPLOYEES']        
        }),

        createEmployee : builder.mutation({
            query : (payload) => ({
                //in backend, the route is /employees with POST
                url : '/employee',
                method : 'POST',
                body : payload
            })
        }),

        deleteEmployee : builder.mutation({
            query: (id) => ({
                url : `/employee/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags : ['EMPLOYEES']
        })
    })
})

export const {
    useDeleteEmployeeMutation, 
    useGetEmployeeDetailsQuery,
    useGetEmployeeListQuery, 
    useCreateEmployeeMutation
} = employeeApi