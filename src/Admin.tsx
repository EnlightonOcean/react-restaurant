import React, { useState } from "react";
import toast from "react-hot-toast";
import {foodTags, NewFood } from "./food";
import { addFood } from "./services/foodsApi";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import Heading from "./shared/Heading";
import Input from "./shared/Input";


const emptyFood: NewFood = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

const Admin = () => {
  const [food, setFood] = useState(emptyFood);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // ** Do not do setFood({ ...food, name: e.target.value });
    //React injects the current state value when a function is passed
    setFood((prevFood) => ({ ...prevFood, [id]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    await addFood(food);
    toast.success("Food added!👌");
    setFood(emptyFood);
  } 

  return (
    <>
      {/* <h1>Admin</h1> */}
      <Heading level={2}>Admin</Heading>
      <form action="" onSubmit={handleSubmit}>
        {/* <Input id="Name" label="Name" className="my-4" onChange={onInputChange} value={food.name}></Input> */}
        <Input
          id="name"
          label="Name"
          className="my-4"
          onChange={onInputChange}
          value={food.name}
        ></Input>
        <Input
          id="description"
          label="Description"
          className="my-4"
          onChange={onInputChange}
          value={food.description}
        ></Input>
        <Input
          id="price"
          label="Price"
          type="number"
          className="my-4"
          onChange={onInputChange}
          value={food.price.toString()}
        ></Input>
        <Input
          id="image"
          label="Image filename"
          className="my-4"
          onChange={onInputChange}
          value={food.image}
        ></Input>
        <CheckboxList label="Tags">
          {foodTags.map((tag) => (
            <Checkbox
              key={tag}
              id={tag}
              label={tag}
              checked={food.tags.includes(tag)}
              onChange = {(event) =>{
                setFood((curFood) => {
                  const { checked } = event.target;
                  const tags = checked
                  ? [...curFood.tags, tag]
                  : curFood.tags.filter(x => x!== tag);
                  return {...curFood,tags};
                })

              }}
            />
          ))}
        </CheckboxList>
        <Button className="block mt-4" type="submit" variant="primary">
          Save
        </Button>
      </form>
    </>
  );
};

export default Admin;
