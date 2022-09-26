import Heading from "./shared/Heading";
import Input from "./shared/input";

const Admin = () => (
  <main>
    {/* <h1>Admin</h1> */}
    <Heading level={2}>Admin</Heading>
    <form action="">
      <Input id="Name" label="Name"></Input>
    </form>
  </main>
);

export default Admin;
