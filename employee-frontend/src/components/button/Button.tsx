import './Button.css'

const Buttons = (props : {value : string, type : "submit"| "reset" | "button", disabled: boolean, onChange :{(event: any) : void}}) => {
    return <button className="buttons"  type={props.type} disabled={props.disabled} onClick={props.onChange}>{props.value}</button>
}

export default Buttons

// import React from 'react';
// import './Button.css';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ 
//   variant = 'primary', 
//   children, 
//   className = '',
//   ...props 
// }) => {
//   return (
//     <button 
//       className={`button button--${variant} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button; 