import React, { useContext, useEffect, useState } from "react";
import AceEditor from "react-ace";
import { CompilerContext } from "./Compiler";

import styled from "styled-components";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-dart";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-tomorrow";

export default function Editor() {
  const { theme, language, setOurCode, ourCode } = useContext(CompilerContext);
  const [editorStyle, setEditorStyle] = useState({
    height: "50vh",
    width: "10vh",
  });
  function onChange(newValue) {
    setOurCode({
      ...ourCode,
      script: newValue,
    });
  }
  const mediaMatch = window.matchMedia("(min-width: 800px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  return (
    <div className="editor-div">
      <AceEditor
        mode={`${language.value}`}
        theme={`${theme}`}
        onChange={onChange}
        editorProps={{ $blockScrolling: true }}
        fontSize="20px"
        // style={editorStyle}
        style={{
          position: matches ? "fixed" : "absolute",
          width: matches ? "60%" : "100%",
          height: matches ? "100%" : "50%",
          top: matches ? 0 : 10,
          // transform: "translate(-50%,-50%)",
        }}
      />
    </div>
  );
}
