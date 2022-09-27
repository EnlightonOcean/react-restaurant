import React from "react";

type InputProps = {
  className?: string;
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  value?: string;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  label,
  type = "text",
  className = "",
  value,
  onChange
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
  </div>
);

export default Input;
