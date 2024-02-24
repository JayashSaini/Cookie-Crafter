import React, { useState, useContext } from "react";
import { MyContextData } from "../types/types";
import myContext from "./context.ts";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const toggleHamburger = () => {
    setHamburgerState((prev) => !prev);
  };

  return (
    <myContext.Provider value={{ hamburgerState, toggleHamburger }}>
      {children}
    </myContext.Provider>
  );
};
export const useMyContext = (): MyContextData => {
  const context = useContext(myContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context as MyContextData;
};

export default ContextProvider;
