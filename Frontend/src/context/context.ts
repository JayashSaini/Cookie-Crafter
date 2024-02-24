import { createContext } from "react";
import { MyContextData } from "../types/types";

// Create the context
const myContext = createContext<MyContextData | undefined>(undefined);

export default myContext;
