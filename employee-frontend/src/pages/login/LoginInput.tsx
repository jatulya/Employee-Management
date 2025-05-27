import type { LoginInputProps } from "../../types/interfaces";
const LoginInput = ({
    name,
  id,
  label,
  type = "text",
  value,
  onChange,
  endAdornment = null,
  ref,
}: LoginInputProps) => {
  return (
    <div className="form-input">
      <input
        name={name}
        type={type}
        value={value}
        ref={ref}
        onChange={onChange}
        id={id}
        placeholder=" "
        required
      />
      <label htmlFor={id}>{label}</label>
      {endAdornment ? endAdornment : null}
    </div>
  );
};

export default LoginInput;
