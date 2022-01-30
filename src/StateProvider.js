// this file is used as a data Layer
// to track the basket
import React, { createContext, useContext, useReducer } from "react";

// This is data Layer
export const StateContext = createContext();

//build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
