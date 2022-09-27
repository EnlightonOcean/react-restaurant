import Checkbox from "./Checkbox";

type CheckboxListProps = {
    label:string;
    className?: string;
    children: React.ReactNode;
};

const CheckboxList = ({ children,className="",label }: CheckboxListProps) => (
  <fieldset className={className}>
    <legend>{label}</legend>
    {children}
  </fieldset>
);
export default CheckboxList;
