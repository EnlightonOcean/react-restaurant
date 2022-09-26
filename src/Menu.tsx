import { foods } from "./food";
import Heading from "./shared/Heading";

const Menu = () => (
  <>
    <Heading level={2}>Menu</Heading>
    <div className="flex flex-wrap">
      {foods.map((food) => {
        return (
          <div
            key={food.name}
            className="hover:bg-indigo-600 hover:text-white p-2 shadow-lg border max-w-sm m-2 rounded"
          >
            {/* <h2 className="text-lg font-bold">{food.name}</h2> */}
            <Heading level={2}>{food.name}</Heading>
            <img
              src={"/images/" + food.image}
              className="h-52"
              alt={food.name}
            />
            <p>{food.description}</p>
            <p>${food.price}</p>
          </div>
        );
      })}
    </div>
  </>
);

export default Menu;
