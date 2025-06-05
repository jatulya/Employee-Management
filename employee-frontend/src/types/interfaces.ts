import type { ChangeEventHandler } from "react"


export interface selectProps {
    name : string,
    id : string,
    label : string,
    options : selectOptions[],
    value : number | string,
    classname? : string,
    onChange? : ChangeEventHandler<HTMLSelectElement>
}

export interface selectOptions {
    value : string | number,
    text : string
}

export interface LoginInputProps {
    id : string,
    label : string,
    type : string,
    value? : string,
    placeholder : string,
    classname? : string,
    variant? : string,
    onChange? : (event : React.ChangeEvent<HTMLInputElement>) => void ,
    endAdornment? : React.ReactNode | null, 
    ref? : React.RefObject<HTMLInputElement | null>,
    disabled? : boolean
}

export interface EmployeeDetailsType {
    detailName : string,
    value : string
}
//export interface ButtonProps extends 