import { createContext } from "react";

export const PowerContext = createContext({
  isPoweredOn: false,
  setPowerOn: () => {},
});
