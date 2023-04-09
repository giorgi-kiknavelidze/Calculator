import { useContext } from "react";
import { CalculatorContext } from "../stores/CalculatorStore";

export class CalculatorStoreProviderMissingError extends Error {
  constructor() {
    super("CalculatorStoreProvider is missing");
    this.name = "CalculatorStoreProviderMissingError";
  }
}

export const useCalculatorStore = () => {
  const store = useContext(CalculatorContext);
  if (store === undefined) throw new CalculatorStoreProviderMissingError();
  return store;
};
