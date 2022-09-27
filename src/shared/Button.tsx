import clsx from "clsx";
import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary";
};

const variantMap = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
};

const Button = ({ children, type, variant, className = "" }: ButtonProps) => (
  <>
    <button
      type={type}
      className={clsx(
        variantMap[variant],
        className,
        "hover:bg-blue-700 font-bold py-2 px-4 rounded"
      )}
    >
      {children}
    </button>
  </>
);

export default Button;
