import { useTheme } from "../hooks/useTheme";
import { ThreeStateSwitch } from "./ThreeStateSwitch";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div className="flex justify-between items-center px-4">
      <p className="text-screen-front text-numeric">calc</p>

      <div className="flex gap-8 items-end">
        <span className="text-screen-front text-sm">THEME</span>
        <ThreeStateSwitch value={theme} onChange={setTheme} />
      </div>
    </div>
  );
};
