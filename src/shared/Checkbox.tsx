import React from "react";

type CheckboxProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({
  className = "",
  id,
  label,
  value,
  checked,
  onChange
}: CheckboxProps) => (
  <div className={className}>
    <input
      checked={checked}
      id={id}
      className="border border-gray-600 p-2"
      type="checkbox"
      value={value}
      onChange={onChange}
    />
    <label className="ml-1" htmlFor={id}>
      {label}
    </label>
  </div>
);
export default Checkbox;
