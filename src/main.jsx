import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";

import App from "./components/App/App.jsx";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>  
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <App />
        </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
