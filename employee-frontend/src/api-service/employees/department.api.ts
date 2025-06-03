import employeeBaseApi from "../api";

export const departmentApi = employeeBaseApi.injectEndpoints({
    endpoints : (builder) => ({
        getDepartmentList : builder.query({
            query : () => '/department'
        })
    })
})

export const {useGetDepartmentListQuery} = departmentApi