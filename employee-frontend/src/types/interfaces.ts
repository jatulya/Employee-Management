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
    name? : string,
    id? : string,
    label : string,
    type? : string,
    value? : string,
    placeholder? : string,
    classname? : string,
    onChange? : () => void ,
    endAdornment? : React.ReactNode | null, 
    ref? : React.RefObject<HTMLInputElement | null>,
}