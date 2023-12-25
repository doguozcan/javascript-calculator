import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [decimalUsed, setDecimalUse] = useState(false);

  function handleDigit(event) {
    let d = event.target.textContent;
    if (display === "0") {
      if (d !== "0") {
        setDisplay(d);
      }
    } else {
      setDisplay(display + d);
    }
  }

  function handleOperator(event) {
    let o = event.target.textContent;
    if (o === "x") o = "*";
    if (o === "AC") {
      setDisplay("0");
      setDecimalUse(false);
    } else if (o === "=") {
      setDisplay(eval(display));
      setDecimalUse(false);
    } else if (o === ".") {
      if (decimalUsed === false) {
        setDisplay(display + ".");
        setDecimalUse(true);
      }
    } else {
      if (display[display.length - 1] === "-" && o === "-") {
        // pass
      } else if (
        (display[display.length - 1] === "+" && o !== "-") ||
        (display[display.length - 1] === "/" && o !== "-") ||
        (display[display.length - 1] === "*" && o !== "-")
      ) {
        setDisplay(display.slice(0, display.length - 1) + o);
      } else if (display[display.length - 1] === "-" && o !== "-") {
        setDisplay(display.slice(0, display.length - 2) + o);
      } else {
        setDisplay(display + o);
        setDecimalUse(false);
      }
    }
  }

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="calculator-keys">
        <div id="clear" className="btn btn-danger" onClick={handleOperator}>
          AC
        </div>
        <div id="divide" className="btn btn-secondary" onClick={handleOperator}>
          /
        </div>
        <div
          id="multiply"
          className="btn btn-secondary"
          onClick={handleOperator}
        >
          x
        </div>
        <div id="seven" className="btn btn-secondary" onClick={handleDigit}>
          7
        </div>
        <div id="eight" className="btn btn-secondary" onClick={handleDigit}>
          8
        </div>
        <div id="nine" className="btn btn-secondary" onClick={handleDigit}>
          9
        </div>
        <div
          id="subtract"
          className="btn btn-secondary"
          onClick={handleOperator}
        >
          -
        </div>
        <div id="four" className="btn btn-secondary" onClick={handleDigit}>
          4
        </div>
        <div id="five" className="btn btn-secondary" onClick={handleDigit}>
          5
        </div>
        <div id="six" className="btn btn-secondary" onClick={handleDigit}>
          6
        </div>
        <div id="add" className="btn btn-secondary" onClick={handleOperator}>
          +
        </div>
        <div id="one" className="btn btn-secondary" onClick={handleDigit}>
          1
        </div>
        <div id="two" className="btn btn-secondary" onClick={handleDigit}>
          2
        </div>
        <div id="three" className="btn btn-secondary" onClick={handleDigit}>
          3
        </div>
        <div id="equals" className="btn btn-primary" onClick={handleOperator}>
          =
        </div>
        <div id="zero" className="btn btn-secondary" onClick={handleDigit}>
          0
        </div>
        <div
          id="decimal"
          className="btn btn-secondary"
          onClick={handleOperator}
        >
          .
        </div>
      </div>
    </div>
  );
}

export default Calculator;
