import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";
import ErrorFallback from "./shared/ErrorFallback";

// Excercise:
const App = () => (
  <>
    <h1 className="text-3xl font-bold underline">React Restaurant</h1>
    <nav className="bg-indigo-100 p-2">
      <ul className="flex">
        <li className="mr-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-2">
        <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>

    
    <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Menu />
            </ErrorBoundary>
          }
        />

        <Route
          path="/admin"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Admin />
            </ErrorBoundary>
          }
        />
      </Routes>
  </>
);

export default App;
// export default function App() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       {foods.map((food) => {
//         return <div style={{ backgroundColor: "gray" }}>{food.name}</div>;
//       })}
//     </>
//   );
// }
