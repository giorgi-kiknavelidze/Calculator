import { Key } from "./Key";

export const KeyBoard = () => (
  <div className="flex flex-col gap-6 p-8 bg-keyboard-back rounded-xl">
    <div className="grid grid-cols-4 gap-6 max-w-fit">
      <Key action={{ type: "append", character: "7" }}>7</Key>
      <Key action={{ type: "append", character: "8" }}>8</Key>
      <Key action={{ type: "append", character: "9" }}>9</Key>
      <Key kind="secondary" action={{ type: "del" }}>
        DEL
      </Key>
      <Key action={{ type: "append", character: "4" }}>4</Key>
      <Key action={{ type: "append", character: "5" }}>5</Key>
      <Key action={{ type: "append", character: "6" }}>6</Key>
      <Key action={{ type: "+" }}>+</Key>
      <Key action={{ type: "append", character: "1" }}>1</Key>
      <Key action={{ type: "append", character: "2" }}>2</Key>
      <Key action={{ type: "append", character: "3" }}>3</Key>
      <Key action={{ type: "-" }}>-</Key>
      <Key action={{ type: "append", character: "." }}>.</Key>
      <Key action={{ type: "append", character: "0" }}>0</Key>
      <Key action={{ type: "/" }}>/</Key>
      <Key action={{ type: "*" }}>x</Key>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <Key kind="secondary" size="lg" action={{ type: "reset" }}>
        RESET
      </Key>
      <Key kind="important" size="lg" action={{ type: "=" }}>
        =
      </Key>
    </div>
  </div>
);
