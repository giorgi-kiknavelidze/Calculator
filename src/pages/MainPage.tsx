import { Screen } from "../components/Screen";
import { KeyBoard } from "../components/KeyBoard";
import { ThemeSwitch } from "../components/ThemeSwitch";

export const MainPage = () => (
  <div className="flex items-center justify-center w-full min-h-screen bg-body-back font-bold">
    <div className="flex flex-col gap-4 justify-center">
      <ThemeSwitch />
      <Screen />
      <KeyBoard />
    </div>
  </div>
);
