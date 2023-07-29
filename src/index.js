import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { AuthContextProvider } from "./Context/AuthContext";
import { NewSubjectContextProvider } from "./Context/NewSubjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NewSubjectContextProvider>
        <App />
      </NewSubjectContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
