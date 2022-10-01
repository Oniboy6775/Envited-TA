import React, { useContext, useReducer } from "react";
import { HANDLE_CHANGE } from "./actions";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
  eventStart: "",
  eventEnd: "",
  eventName: "",
  eventLocation: "",
  eventUrl: "",
  evenDesc: "",
  eventHostName: "",
  eventImg: "",
  isEditing: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  return (
    <AppContext.Provider value={{ ...state, handleChange }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
