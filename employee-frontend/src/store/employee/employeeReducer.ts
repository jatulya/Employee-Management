import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EmployeeState, Employee } from "./employee.types";

const initialState: EmployeeState = {
    employees : [] //can give empty array
}

export const employeeSlice = createSlice({
    name : 'employee', //the same one store page
    initialState, //defined above
    reducers: { //actions
        addEmployee : (state, action : PayloadAction<Employee>) => {
            state.employees.push(action.payload)
        }
    }
})

export const {addEmployee} = employeeSlice.actions
export default employeeSlice.reducer 
// import { employeesdummy } from "./dummyEmployee";
// import { EMPLOYEE_ACTION_TYPES, type EmployeeAction, type EmployeeState } from "./employee.types";

// const initialState :EmployeeState = {employees : []}

// //return of this function is always the same type of the initial state 
// export function employeeReducer(state : EmployeeState =initialState, action : EmployeeAction) : EmployeeState{
//     switch(action.type){
//         case EMPLOYEE_ACTION_TYPES.UPDATE:{
//             console.log("Employee Update")
//             return state;
//         }
//         case EMPLOYEE_ACTION_TYPES.DELETE:{
//             console.log("Employee deleete")
//             return state;
//         }
//         case EMPLOYEE_ACTION_TYPES.CREATE : {
//             return {
//                 ...state,
//                 employees:[...state.employees, action.payload]
//             }
//         }
//         default:
//             return state
//     }
// }