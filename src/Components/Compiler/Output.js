import React, { useState, useContext } from "react";
import { CompilerContext } from "./Compiler";
import "./Style/Output.scss";
import CompilerHeader from "./CompilerHeader";

export default function Output() {
  const { myOutput, setOurCode, ourCode } = useContext(CompilerContext);
  const [inputValue, setInputValue] = useState("");
  function inputHandler(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
    setOurCode({ ...ourCode, stdin: e.target.value });
  }

  return (
    <div className="output-side">
      <CompilerHeader />
      <div className="stdin">
        <span>STDIN</span>
        <textarea
          rows={3}
          type="text"
          placeholder="Input for the program ( Optional )"
          className="input"
          onChange={inputHandler}
          value={inputValue}
        />
        <div className="indicator"></div>
      </div>

      <div className="output-div">
        <span>OUTPUT</span>
        <pre className="output">{myOutput ? myOutput : "Run Your Code"}</pre>
      </div>
    </div>
  );
}
