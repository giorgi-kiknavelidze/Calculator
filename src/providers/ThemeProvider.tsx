import { useTheme } from "../hooks/useTheme";
import { clsx } from "clsx";
import { ReactNode } from "react";
import "./ThemeProvider.css";

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme] = useTheme();
  return (
    <div
      className={clsx(
        "w-full h-full",
        theme === 0 && "theme-0",
        theme === 1 && "theme-1",
        theme === 2 && "theme-2"
      )}
    >
      {children}
    </div>
  );
};
