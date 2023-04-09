import { ComponentPropsWithoutRef, forwardRef } from "react";
import { clsx } from "clsx";
import { CalculatorAction } from "../hooks/useCalculator";
import { useCalculatorStore } from "../hooks/useCalculatorStore";

export interface KeyProps extends ComponentPropsWithoutRef<"button"> {
  kind?: "primary" | "secondary" | "important";
  size?: "md" | "lg";
  action: CalculatorAction;
}

export const Key = forwardRef<HTMLButtonElement, KeyProps>(
  (
    { kind = "primary", action, onClick, size = "md", className, ...rest },
    ref
  ) => {
    const styles = {
      "border-b-solid border-b-4 rounded-xl": true,
      "w-[3.75rem] md:w-[6.5rem] h-[4rem]": size === "md",
      "md:w-[14.5rem] h-[4rem]": size === "lg",
      "text-numeric bg-key-back border-b-key-shadow text-key-front active:bg-key-active":
        kind === "primary",
      "md:text-numeric bg-key-back-alt border-b-key-shadow-alt text-key-front-alt active:bg-key-active-alt":
        kind === "secondary",
      "text-numeric bg-key-back-important border-b-key-shadow-important text-key-front-important active:bg-key-active-important":
        kind === "important",
    };

    const { dispatch } = useCalculatorStore();

    return (
      <button
        ref={ref}
        onClick={(e) => {
          dispatch(action);
          onClick?.(e);
        }}
        className={clsx(styles, className)}
        {...rest}
      />
    );
  }
);
