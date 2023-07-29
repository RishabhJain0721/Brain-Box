import { createContext, useReducer } from "react";
import NewSubjectReducer from "./NewSubjectReducer.js"

const INITIAL_STATE = {
  newSubject : ""
};

export const NewSubjectContext = createContext(INITIAL_STATE);

export const NewSubjectContextProvider = ({ children }) => {
  const [state, dispatch2] = useReducer(NewSubjectReducer, INITIAL_STATE);
  return (
    <NewSubjectContext.Provider value={{ newSubject: state.newSubject, dispatch2 }}>
      {children}
    </NewSubjectContext.Provider>
  );
};