import React from "react";

export interface NewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant : "primary" | 'secondary' | 'ternary',
    children : React.ReactNode
}