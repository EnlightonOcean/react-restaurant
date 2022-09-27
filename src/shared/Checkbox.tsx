type CheckboxProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
};
const Checkbox = ({
  className = "",
  id,
  label,
  value,
  checked,
}: CheckboxProps) => (
  <div className={className}>
    <input
      checked={checked}
      id={id}
      className="border border-gray-600 p-2"
      type="checkbox"
      value={value}
    />
    <label className="block" htmlFor={id}>
      {label}
    </label>
  </div>
);
export default Checkbox;
