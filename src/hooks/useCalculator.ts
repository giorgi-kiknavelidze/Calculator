import { Decimal } from "decimal.js";
import { useReducer } from "react";

export interface ICalculatorData {
  leftHandSide: string;
  operator: "+" | "-" | "*" | "/" | "";
  rightHandSide: string;
  isFresh: boolean;
}

interface MinusAction {
  type: "-";
}

interface OperatorAction {
  type: "+" | "*" | "/" | "=";
}

interface AppendAction {
  type: "append";
  character: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | ".";
}

interface MiscAction {
  type: "del" | "reset";
}

export type CalculatorAction =
  | OperatorAction
  | MinusAction
  | AppendAction
  | MiscAction;

const operatorReducer = (
  value: ICalculatorData,
  action: OperatorAction
): ICalculatorData => {
  if (action.type !== "=") {
    return {
      ...operatorReducer(value, { type: "=" }),
      operator: action.type,
      isFresh: false,
    };
  }
  if (value.leftHandSide === "-") return value;
  if (value.operator && value.rightHandSide) {
    const leftHandSideDecimal = new Decimal(value.leftHandSide);
    const rightHandSideDecimal = new Decimal(
      value.rightHandSide !== "-" ? value.rightHandSide : 0
    );
    if (value.operator === "+")
      return {
        leftHandSide: leftHandSideDecimal.add(rightHandSideDecimal).toString(),
        operator: "",
        rightHandSide: "",
        isFresh: true,
      };
    if (value.operator === "-" && value.rightHandSide !== "-")
      return {
        leftHandSide: leftHandSideDecimal.sub(rightHandSideDecimal).toString(),
        operator: "",
        rightHandSide: "",
        isFresh: true,
      };
    if (value.operator === "*")
      return {
        leftHandSide: leftHandSideDecimal.mul(rightHandSideDecimal).toString(),
        operator: "",
        rightHandSide: "",
        isFresh: true,
      };
    if (value.operator === "/")
      return {
        leftHandSide: leftHandSideDecimal.div(rightHandSideDecimal).toString(),
        operator: "",
        rightHandSide: "",
        isFresh: true,
      };
  }
  return { ...value, isFresh: false };
};

const minusReducer = (
  value: ICalculatorData,
  _action: MinusAction
): ICalculatorData => {
  if (
    value.leftHandSide === "" ||
    value.leftHandSide === "-" ||
    value.leftHandSide === "0"
  )
    return { ...value, leftHandSide: "-" };
  if (value.operator === "") return { ...value, operator: "-", isFresh: false };
  if (value.rightHandSide === "" || value.rightHandSide === "-")
    return { ...value, rightHandSide: "-" };
  return {
    ...operatorReducer(value, { type: "=" }),
    operator: "-",
    isFresh: false,
  };
};

const appendReducer = (
  value: ICalculatorData,
  action: AppendAction
): ICalculatorData => {
  if (value.isFresh)
    return appendReducer(
      { leftHandSide: "", operator: "", rightHandSide: "", isFresh: false },
      action
    );
  if (value.operator) {
    if (value.rightHandSide === "0")
      return appendReducer({ ...value, rightHandSide: "" }, action);
    if (action.character === "." && value.rightHandSide === "")
      return { ...value, rightHandSide: "0.", isFresh: false };
    else if (action.character === "." && !value.rightHandSide.includes("."))
      return {
        ...value,
        rightHandSide: value.rightHandSide + ".",
        isFresh: false,
      };
    else if (action.character !== ".")
      return {
        ...value,
        rightHandSide: value.rightHandSide + action.character,
        isFresh: false,
      };
  }
  if (value.leftHandSide === "0")
    return appendReducer({ ...value, leftHandSide: "" }, action);
  if (action.character === "." && value.leftHandSide === "")
    return { ...value, leftHandSide: "0." };
  else if (action.character === "." && !value.leftHandSide.includes("."))
    return { ...value, leftHandSide: value.leftHandSide + "." };
  else if (action.character !== ".")
    return {
      ...value,
      leftHandSide: value.leftHandSide + action.character,
      isFresh: false,
    };
  return { ...value, isFresh: false };
};

const miscReducer = (
  value: ICalculatorData,
  action: CalculatorAction
): ICalculatorData => {
  if (action.type === "del") {
    if (value.rightHandSide !== "")
      return {
        ...value,
        rightHandSide: value.rightHandSide.slice(0, -1) || "0",
        isFresh: false,
      };
    else if (value.operator !== "")
      return { ...value, operator: "", isFresh: false };
    else if (value.leftHandSide !== "")
      return {
        ...value,
        leftHandSide: value.leftHandSide.slice(0, -1) || "0",
        isFresh: false,
      };
    else return value;
  }
  return { leftHandSide: "0", operator: "", rightHandSide: "", isFresh: true };
};

const reducer = (
  value: ICalculatorData,
  action: CalculatorAction
): ICalculatorData => {
  if (/[A-z]/.test(value.leftHandSide))
    return reducer(miscReducer(value, { type: "reset" }), action);
  if (
    action.type === "+" ||
    action.type === "*" ||
    action.type === "/" ||
    action.type === "="
  )
    return operatorReducer(value, action);
  if (action.type === "-") return minusReducer(value, action);
  if (action.type === "append") return appendReducer(value, action);
  return miscReducer(value, action);
};

export const useCalculator = () =>
  useReducer(reducer, {
    leftHandSide: "0",
    operator: "",
    rightHandSide: "",
    isFresh: true,
  });
