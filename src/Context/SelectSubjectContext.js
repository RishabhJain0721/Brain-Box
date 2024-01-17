import { createContext, useReducer } from "react";
import SelectSubjectReducer from "./SelectSubjectReducer.js";

const INITIAL_STATE = {
  selectedSubject: "",
};

export const SelectSubjectContext = createContext(INITIAL_STATE);

export const SelectSubjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SelectSubjectReducer, INITIAL_STATE);
  return (
    <SelectSubjectContext.Provider
      value={{ selectedSubject: state.selectedSubject, dispatch }}
    >
      {children}
    </SelectSubjectContext.Provider>
  );
};
