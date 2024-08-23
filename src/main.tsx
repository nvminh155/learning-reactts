import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./layouts/header/index.tsx";
import { Footer } from "./layouts/footer/index.tsx";

import { store } from "@/reduxs/store.ts";
import { Provider as ReduxProvider } from "react-redux";
import ModalHome from "./components/modals/ModalHome.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <Header />
      <App />
      <ModalHome />
      <Footer />
    </ReduxProvider>
  </BrowserRouter>
);
