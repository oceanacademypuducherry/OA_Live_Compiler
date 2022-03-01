import React, { useContext, useState, useRef, useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";
import "./Style/CompilerHeaderStyle.scss";
import Dropdown from "react-dropdown";
import { BsFillMoonStarsFill, BsCloudSunFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import "react-dropdown/style.css";

import { CompilerContext } from "./Compiler";
import axios from "axios";

export default function CompilerHeader() {
  const { setTheme, setLanguage, setMyOptput, ourCode } =
    useContext(CompilerContext);

  const selectedCourse = useRef();
  const [hoverCourse, setHoverCourse] = useState(0);
  const [themeIcon, setThemeIcon] = useState(true);

  const [clickCourse, setClickCourse] = useState(false);

  const languages = [
    {
      value: "python",
      label: "Python",
      className: "options",
    },
    {
      value: "javascript",
      label: "JavaScript",
      className: "options",
    },
    {
      value: "java",
      label: "Java",
      className: "options",
    },

    {
      value: "c_cpp",
      label: "C & C++",
      className: "options",
    },
    {
      value: "dart",
      label: "Dart",
      className: "options",
    },
  ];
  const editorTheme = [
    { value: "one_dark", label: "Dark" },
    { value: "github", label: "Light" },
  ];

  function languageChange(value) {
    setLanguage(value);
  }
  function themeChange(value) {
    setTheme(value.value);
  }

  async function compileCode() {
    axios
      .post("http://192.168.0.40:4000/jd", ourCode)
      .then((res) => {
        let outputData = res.data;
        console.log();
        setMyOptput(outputData.output);
      })
      .catch((error) => console.log("error===", error));
  }

  function onClickLang() {
    setClickCourse(!clickCourse);
  }
  return (
    // <div className="compilerHeader">
    //   <div className="filename">HelloWorld.py</div>

    <div className="all-aprations">
      <div className="oprations">
        <div className="run" onClick={compileCode}>
          <span>Run</span>
          <BsPlayFill />
        </div>

        <div
          className="mydropdown"
          id="drop"
          onClick={onClickLang}
          style={{
            borderBottomLeftRadius: clickCourse ? 0 : 5,
            borderBottomRightRadius: clickCourse ? 0 : 5,
            transitionDelay: clickCourse ? "0" : "1s",
          }}
        >
          <div className="value-label">
            <span ref={selectedCourse} style={{ paddingLeft: "10px" }}>
              Python
            </span>
            <BsPlayFill
              style={{
                padding: "10px",
                transform: clickCourse ? "rotateZ(90deg)" : "rotateZ(0deg)",
                transition: "0.3s",
              }}
            />
          </div>

          <div
            className="dr-option"
            style={{ height: clickCourse ? languages.length * 40 : 0 }}
          >
            <div
              className="hover-div"
              style={{
                top: 40 * hoverCourse,
                borderColor: themeIcon ? "white" : "#040722",
              }}
            ></div>
            {languages.map((lang, index) => (
              <div
                className="lang"
                key={index}
                onClick={() => {
                  selectedCourse.current.innerText = lang.label;

                  setLanguage(lang);
                }}
                onMouseOver={() => {
                  setHoverCourse(index);
                }}
              >
                {lang.label}
              </div>
            ))}
          </div>
        </div>
        <div
          className="theme-change"
          style={{
            background: themeIcon ? "#111111" : "#d1d1d1",
          }}
          onClick={() => {
            console.log(themeIcon);
            setThemeIcon(!themeIcon);
            setTheme(themeIcon ? "github" : "one_dark");
          }}
        >
          {themeIcon ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsCloudSunFill color="#111111" size={20} />
          )}
        </div>
      </div>
      {/* mobile opratgion */}
      <div className="mobile-opration">
        <div
          className="theme-change"
          style={{ background: themeIcon ? "#111111" : "#d1d1d1" }}
          onClick={() => {
            console.log(themeIcon);
            setThemeIcon(!themeIcon);
            setTheme(themeIcon ? "github" : "one_dark");
          }}
        >
          {themeIcon ? (
            <BsFillMoonStarsFill size={22} />
          ) : (
            <BsCloudSunFill color="#111111" size={22} />
          )}
        </div>
        <div className="mydropdown" onClick={onClickLang}>
          <div className="value-label">
            <BiCodeAlt size={30} />

            {/* <BsPlayFill
              style={{
                padding: "10px",
                transform: clickCourse ? "rotateZ(90deg)" : "rotateZ(0deg)",
                transition: "0.3s",
              }}
            /> */}
          </div>

          <div
            className="dr-option"
            style={{ height: clickCourse ? languages.length * 40 : 0 }}
          >
            <div
              className="hover-div"
              style={{
                top: 40 * hoverCourse,
                borderColor: themeIcon ? "white" : "#040722",
              }}
            ></div>
            {languages.map((lang, index) => (
              <div
                className="lang"
                key={index}
                onClick={() => {
                  selectedCourse.current.innerText = lang.label;

                  setLanguage(lang);
                }}
                onMouseOver={() => {
                  setHoverCourse(index);
                }}
              >
                {lang.label}
              </div>
            ))}
          </div>
        </div>
        <div className="mobile-run" onClick={compileCode}>
          <BsPlayFill />
        </div>
      </div>
      {clickCourse && (
        <div className="dismiss-dropdown" onClick={onClickLang}></div>
      )}
    </div>
    // </div>
  );
}
