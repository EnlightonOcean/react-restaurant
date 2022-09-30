import { useQueryClient,useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { foodTags, NewFood } from "./food";
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

export type Errors = {
  name?: string;
  image?: string;
  price?: string;
  description?: string;
  tags?: string;
};

export type Touched = {
  name?: boolean;
  image?: boolean;
  price?: boolean;
  description?: boolean;
  tags?: boolean;
};

type FormStatus = "idle" | "submitting" | "submitted" | "error";

const Admin = () => {
  const [food, setFood] = useState(emptyFood);
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  //const [errors,setErrors] = useState<Errors>({});
  const queryClient = useQueryClient();

  const foodMutation = useMutation(addFood, {
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
      toast.success("Food added!👌");
      setStatus("idle");
      setFood(emptyFood);
      setTouched({});
    },
    onError: () =>{
      toast.error("Error adding Food 😂");
      setStatus("error");
      
    }
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // ** Do not do setFood({ ...food, name: e.target.value });
    //React injects the current state value when a function is passed
    setFood((prevFood) => ({ ...prevFood, [id]: value }));
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!food.name) {
      newErrors.name = "Name is required";
    }
    if (!food.image) {
      newErrors.image = "Image filename is required";
    }
    if (!food.price) {
      newErrors.price = "Price is required";
    }
    if (!food.description) {
      newErrors.description = "Description is required";
    }
    if (food.tags.length === 0) {
      newErrors.tags = "At least one tag is required";
    }
    //setErrors(newErrors);
    //return Object.keys(newErrors).length === 0;
    return newErrors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length == 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    if (status == "submitting") return;

    setStatus("submitting");
    //const isValid = validate();
    if (!isValid) {
      setStatus("submitted");
      return;
    }

    try {
      //await addFood(food);
      foodMutation.mutate(food);
    } catch (err) {
      setStatus("error");
      return;
    }

  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched((currentTouched) => ({ ...currentTouched, [id]: true }));
  };

  const handleError = (field: keyof Errors) => {
    return status === "submitted" || touched[field] ? errors[field] : "";
  };

  if (status === "error") {
    throw new Error("Something went wrong");
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
          onBlur={handleBlur}
          value={food.name}
          error={handleError("name")} //{status === "submitted" || touched.name ? errors.name : ""}
        ></Input>
        <Input
          id="description"
          label="Description"
          className="my-4"
          onChange={onInputChange}
          onBlur={handleBlur}
          value={food.description}
          error={handleError("description")}
        ></Input>
        <Input
          id="price"
          label="Price"
          type="number"
          className="my-4"
          onChange={onInputChange}
          onBlur={handleBlur}
          value={food.price.toString()}
          error={handleError("price")}
        ></Input>
        <Input
          id="image"
          label="Image filename"
          className="my-4"
          onChange={onInputChange}
          onBlur={handleBlur}
          value={food.image}
          error={handleError("image")}
        ></Input>
        <CheckboxList
          label="Tags"
          error={handleError("tags")}
          //error={ status === "submitted" ? errors.tags : undefined}
        >
          {foodTags.map((tag) => (
            <Checkbox
              key={tag}
              id={tag}
              label={tag}
              checked={food.tags.includes(tag)}
              onChange={(event) => {
                setFood((curFood) => {
                  const { checked } = event.target;
                  const tags = checked
                    ? [...curFood.tags, tag]
                    : curFood.tags.filter((x) => x !== tag);
                  return { ...curFood, tags };
                });
              }}
            />
          ))}
        </CheckboxList>
        <Button className="block mt-4" type="submit" variant="primary">
          {status === "submitting" ? "Saving" : "Save"}
        </Button>
      </form>
    </>
  );
};

export default Admin;
