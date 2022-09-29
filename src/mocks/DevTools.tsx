import { useState } from "react";
import App from "../App";
import { useWorker } from "./useWorker";
export type FoodResponse = "Ice creame shop"|"Diner";

const DevTools = () => {
  const [foodResponse, setFoodResponse] = useState<FoodResponse>("Diner");

  const isReady = useWorker({
    foodResponse,
  });

  if(!isReady) return <p>Initializing...</p>

  return (
    <>
    <App key={foodResponse}/>
    <section className="fixed p-4 border shadow-xl max-h-screen overflow-auto bg-white opacity-90 bottom-0">
      <label className="block">Food Response</label>
      <select value={foodResponse} onChange={(event) => setFoodResponse(event.target.value as FoodResponse)}>
        <option value="Ice creame shop">Ice creame shop</option>
        <option value="Diner">Diner</option>
      </select>
    </section>
    </>
  );
};

export default DevTools;
