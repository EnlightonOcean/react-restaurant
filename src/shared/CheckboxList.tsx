import Checkbox from "./Checkbox";
import Error from "./Error";
type CheckboxListProps = {
    label:string;
    className?: string;
    children: React.ReactNode;
    error?:string;
};

const CheckboxList = ({ children,className="",label,error }: CheckboxListProps) => (
  <fieldset className={className}>
    <legend>{label}</legend>
    {error &&  <Error error={error} />}
    {children}
  </fieldset>
);
export default CheckboxList;
