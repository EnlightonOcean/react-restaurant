type InputProps = {
  className?: string;
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  value?: string;
};

const Input = ({
  id,
  label,
  type = "text",
  className = "",
  value = ""
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
    />
  </div>
);

export default Input;
