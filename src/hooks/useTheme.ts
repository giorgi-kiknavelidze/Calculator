import { useLocalStorage } from "usehooks-ts";

export const useTheme = () => useLocalStorage("theme", 0);
