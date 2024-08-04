import { useContext } from "react";
import { TAppContext } from "../types";
import { AppContext } from "../context";

export const useAppContext = () => {
  const context = useContext(AppContext) as TAppContext;

  return context;
};
