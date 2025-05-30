export interface selectProps {
    name : string,
    id : string,
    label : string,
    options : selectOptions[],
    classname? : string
}

export interface selectOptions {
    value : string,
    text : string
}

export interface LoginInputProps {
    id : string,
    label : string,
    type : string,
    value? : string,
    placeholder : string,
    classname? : string,
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