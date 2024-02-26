import React, { useState, useEffect, createContext } from "react";

// Componets

import Editor from "./Editor";
import Output from "./Output";

import { ThemeProvider } from "styled-components";
import { GlobaleStyle, lightTheme, darkTheme } from "./Style/globalStyle";
// styles
import "./Style/CompilerStyle.scss";

const clientId = "3cfd2d12dc136020fc8f9068ed0e2b7b";
const clientSecret =
  "5b3676bd8816a18c6f7a4fa36faff5841afc7ee5e6ca8d7aa0d262c09dac0442";

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
    clientId: clientId,
    clientSecret: clientSecret,
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
