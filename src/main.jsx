import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./components/store/Store.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
