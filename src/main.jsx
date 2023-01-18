import { createRoot } from "react-dom/client";

//* Components *//
import App from "./App";

//* Router *//
import { BrowserRouter } from "react-router-dom";

//* Global Css *//
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
