import React from "react";

export interface NewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: { 
        color : "primary" | 'secondary' | 'ternary',
        size : "sm" | 'md' | 'lg'
    } 
    children : React.ReactNode
}