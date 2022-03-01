import React, { useState, useEffect, createContext } from "react";

// Componets
import CompilerHeader from "./CompilerHeader";
import Editor from "./Editor";
import Output from "./Output";

import { ThemeProvider } from "styled-components";
import { GlobaleStyle, lightTheme, darkTheme } from "./Style/globalStyle";
// styles
import "./Style/CompilerStyle.scss";

export const CompilerContext = createContext(null);
export default function Compiler() {
  const [theme, setTheme] = useState("one_dark");
  const [language, setLanguage] = useState({
    value: "python",
    label: "Python",
  });
  const [myOutput, setMyOptput] = useState("");
  const [ourCode, setOurCode] = useState({
    script: "",
    language: "",
    stdin: "",
    versionIndex: "0",
    clientId: "263bef597786386d1facd3730ecd175c",
    clientSecret:
      "9ab0414e4600b404389bbd15a7264a37bcf12d32800b102843a8072d9b503019",
  });
  function getMode(mode) {
    if (mode === "python") {
      return "python3";
    } else if (mode === "javascript") {
      return "nodejs";
    } else if (mode === "java") {
      return "java";
    } else if (mode === "c_cpp") {
      return "cpp";
    } else if (mode === "dart") {
      return "dart";
    }
  }
  const themeMode = theme === "one_dark" ? darkTheme : lightTheme;
  useEffect(() => {
    setOurCode({ ...ourCode, language: getMode(language.value) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  return (
    <div>
      {/* <div className="appbar" style={{ height: 50, background: "blue" }}>
        ocean academy
      </div> */}
      <CompilerContext.Provider
        value={{
          theme,
          setTheme,
          ourCode,
          setOurCode,
          language,
          setLanguage,
          myOutput,
          setMyOptput,
        }}
      >
        <ThemeProvider theme={themeMode}>
          <GlobaleStyle />
          <div className="compiler">
            {/* <CompilerHeader /> */}
            <div className="compiler-body">
              <Editor />
              <Output />
            </div>
          </div>
        </ThemeProvider>
      </CompilerContext.Provider>
    </div>
  );
}
