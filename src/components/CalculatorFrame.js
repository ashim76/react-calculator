import React, { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

const buttons = [
  { cls: "clear", label: "C" },
  { cls: "clean", label: "AC" },
  { cls: "divide", label: "/" },
  { cls: "multi", label: "*" },
  { cls: "plus", label: "+" },
  { cls: "minus", label: "-" },
  { cls: "no-7", label: "7" },
  { cls: "no-8", label: "8" },
  { cls: "no-9", label: "9" },
  { cls: "no-6", label: "6" },
  { cls: "no-5", label: "5" },
  { cls: "no-4", label: "4" },
  { cls: "no-3", label: "3" },
  { cls: "no-2", label: "2" },
  { cls: "no-1", label: "1" },
  { cls: "no-0", label: "0" },
  { cls: "dot", label: "." },
  { cls: "ans", label: "=" },
];

const symbols = ["+", "-", "*", "/"];

export const CalculatorFrame = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  

  const handleOnClick = value => {
      if (isAnswered && value !== "=" ){
          setTextToDisplay(value);
          setIsAnswered(false);
          return;
      }
    let str = textToDisplay + value;

    if (textToDisplay.length < 1 && ["*", "/"].includes(value)) {
      return;
    }

    
    if (value === "." && textToDisplay.includes(".")) {
      return;
    }

    if (value === "=") {
        return onTotal();
      }

    if (value === "AC") {
      return setTextToDisplay("");
    }

    if (value === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTextToDisplay(str);
    }

    if (symbols.includes(value)) {
      const lastChar = textToDisplay.slice(-1);
      if (symbols.includes(lastChar)) {
        str = textToDisplay.slice(0, -1) + value;
        // setTextToDisplay(str);
      }
    }

    setTextToDisplay(str);
  };

  const onTotal = () => {
    let str = textToDisplay;
    const lastChar = textToDisplay.slice(-1);
    if (symbols.includes(lastChar)) {
      str = textToDisplay.slice(0, -1);
    }
    const ttl = eval(textToDisplay);
    setTextToDisplay(ttl.toString());
    setIsAnswered(true);
  };
  //   console.log(textToDisplay);

  return (
    <div className="mainParent">
      {/*<!-- display area -->*/}
      <Display textToDisplay={textToDisplay} />

      {/*<!-- buttons -->*/}
      <div className="items">
        {buttons.map((item, i) => {
          return <Button key={i} item={item} handleOnClick={handleOnClick} />;
        })}
      </div>
    </div>
  );
};
