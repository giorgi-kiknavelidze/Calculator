import {
  ICalculatorData,
  CalculatorAction,
  useCalculator,
} from "../hooks/useCalculator";
import { createContext, Dispatch, ReactNode } from "react";

interface ICalculatorStore {
  calculatorData: ICalculatorData;
  dispatch: Dispatch<CalculatorAction>;
}

export const CalculatorContext = createContext<ICalculatorStore | undefined>(
  undefined
);

export interface CalculatorStoreProviderProps {
  children: ReactNode;
}

export const CalculatorStoreProvider = ({
  children,
}: CalculatorStoreProviderProps) => {
  const [calculatorData, dispatch] = useCalculator();
  return (
    <CalculatorContext.Provider value={{ calculatorData, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
