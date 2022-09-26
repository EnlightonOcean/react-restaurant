type InputProps = {
    id: string;
    label:string;
};

const Input = (prop: InputProps) => (
  <main>
    <label className="block" htmlFor={prop.id}>
      {prop.label}
    </label>
    <input id={prop.id} className="border border-gray-600 p-2" type="text" />
  </main>
);

export default Input;
