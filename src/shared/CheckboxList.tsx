import Checkbox from "./Checkbox";

type CheckboxListProps = {
    className?: string;
    children: React.ReactNode;
};

const CheckboxList = ({ children,className="" }: CheckboxListProps) => (
  <div className={className}>
    {children}
  </div>
);
export default CheckboxList;
