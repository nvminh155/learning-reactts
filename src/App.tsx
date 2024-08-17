import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {

  return (
    <div className="max-w-[70vw] mx-auto py-3">
      <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
    </div>
  );
}

export default App;
