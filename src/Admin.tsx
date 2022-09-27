import { foodTags } from "./food";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import Heading from "./shared/Heading";
import Input from "./shared/Input";
const Admin = () => (
  <>
    {/* <h1>Admin</h1> */}
    <Heading level={2}>Admin</Heading>
    <form action="">
      <Input id="Name" label="Name" className="my-4"></Input>
      <Input id="Description" label="Description" className="my-4"></Input>
      <Input id="Price" label="Price" type="number" className="my-4"></Input>
      <Input id="image" label="Image filename" className="my-4"></Input>
      <CheckboxList label="Tags">
        {foodTags.map((tag) => (
          <Checkbox key={tag} id={tag} label={tag} />
        ))}
      </CheckboxList>
      <Button className="block mt-4" type="submit" variant="primary">
        Save
      </Button>
    </form>
  </>
);

export default Admin;
