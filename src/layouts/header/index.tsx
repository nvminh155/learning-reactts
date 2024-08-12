import { Nav } from "./nav";
import logo from "../../assets/logos/logo.svg";
import { Switch } from "./switch";

export const Header = () => {
  return (
    <header className="flex w-full h-20">
      <div className="w-1/4 flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Nav />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <Switch />
      </div>
    </header>
  );
};
