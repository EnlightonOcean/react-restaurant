import React from "react";
import Error from "./Error";

type InputProps = {
  className?: string;
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  value?: string;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
  error?:string;
};

const Input = ({
  id,
  label,
  type = "text",
  className = "",
  value,
  onChange,
  error
}: InputProps) => (
  <div className={className}>
    <label className="block" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      className="border border-gray-600 p-2"
      type={type}
      value={value}
      onChange = {onChange}
    />
    {error &&  <Error error={error} />}
  </div>
);

export default Input;
