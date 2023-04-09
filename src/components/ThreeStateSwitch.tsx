import { clsx } from "clsx";

export interface ThreeStateSwitchProps {
  value: number;
  onChange?: (newValue: number) => void;
}

export const ThreeStateSwitch = ({
  value,
  onChange,
}: ThreeStateSwitchProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-sm gap-2 text-center text-screen-front px-1">
        <button className="w-4" onClick={() => onChange?.(0)}>
          1
        </button>
        <button className="w-4" onClick={() => onChange?.(1)}>
          2
        </button>
        <button className="w-4" onClick={() => onChange?.(2)}>
          3
        </button>
      </div>
      <div className="flex rounded-full bg-keyboard-back gap-2 p-1">
        <button
          className={clsx(
            "w-4 h-4 roundex-full bg-key-back-important rounded-full",
            value !== 0 && "opacity-0"
          )}
          onClick={() => onChange?.(0)}
        />
        <button
          className={clsx(
            "w-4 h-4 roundex-full bg-key-back-important rounded-full",
            value !== 1 && "opacity-0"
          )}
          onClick={() => onChange?.(1)}
        />
        <button
          className={clsx(
            "w-4 h-4 roundex-full bg-key-back-important rounded-full",
            value !== 2 && "opacity-0"
          )}
          onClick={() => onChange?.(2)}
        />
      </div>
    </div>
  );
};
