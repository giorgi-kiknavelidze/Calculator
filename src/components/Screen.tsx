import { useCalculatorStore } from "../hooks/useCalculatorStore";

export const Screen = () => {
  const { calculatorData } = useCalculatorStore();
  return (
    <input
      className="bg-screen-back rounded-xl text-6xl text-screen-front p-8 text-right"
      size={1}
      value={`${calculatorData.leftHandSide}${calculatorData.operator}${
        calculatorData.rightHandSide.includes("-")
          ? `(${calculatorData.rightHandSide})`
          : `${calculatorData.rightHandSide}`
      }`}
      disabled
    />
  );
};
