import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext";
import { NewSubjectContextProvider } from "./Context/NewSubjectContext";
import { SelectSubjectContextProvider } from "./Context/SelectSubjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NewSubjectContextProvider>
        <SelectSubjectContextProvider>
          <App />
        </SelectSubjectContextProvider>
      </NewSubjectContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
