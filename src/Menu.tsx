import { foods } from "./food";

const Menu = () => (
    <div className="flex flex-wrap">
      {foods.map((food) => {
        return (
          <div className="hover:bg-indigo-600 hover:text-white p-2 shadow-lg border max-w-sm m-2 rounded">
            <h2 className="text-lg font-bold">{food.name}</h2>
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
);

export default Menu;