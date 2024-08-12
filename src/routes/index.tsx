import { ReactNode } from "react";
import Home from "../pages/home";

const createRootRouter = (path: string, element: ReactNode) => {
  return {
    path,
    element,
  };
};

const routes = [createRootRouter("/", <Home />)];

export default routes;
