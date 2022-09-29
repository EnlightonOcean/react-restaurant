import { Food } from "../food";

export const mockDiners: Food[] = [
  {
    id: 1,
    name: "Burger",
    image: "burger.jpg",
    price: 8.99,
    description:
      "This ain't your average burger. Topped with our tangy cheddar cheese sauce, fresh lettuce, and tomato.",
    tags: ["Lunch", "Dinner"],
  },
  {
    id: 2,
    name: "Banana Blueberry French Toast",
    image: "banana-french-toast.jpg",
    price: 9.99,
    description: "Delicious french toast with banana and blueberry.",
    tags: ["Breakfast"],
  },
  {
    id: 3,
    name: "Cajun Pasta",
    image: "cajun-pasta.jpg",
    price: 16.99,
    description: "Creole-style pasta that's guaranteed to make you sweat.",
    tags: ["Lunch", "Dinner", "Spicy"],
  },
];

export const mockIceCreameShop: Food[] = [
  {
    id: 1,
    name: "Vannila Ice Creame Cone",
    image: "IceCone.jpg",
    price: 8.99,
    description:
      "This ain't your average IceCreame. Topped with our tangy choclate.",
    tags: ["Lunch", "Dinner"],
  },
];
