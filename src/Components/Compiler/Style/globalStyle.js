import { createGlobalStyle } from "styled-components";

export const GlobaleStyle = createGlobalStyle`

body{
    background:${({ theme }) => theme.body};
    /* background-color: blue; */
    color:${({ theme }) => theme.text};
    box-sizing: border-box;
}
.compilerHeader{
    background:${({ theme }) => theme.body};
    color:${({ theme }) => theme.text}
}
.output-side,.oprations {
  
  background:${({ theme }) => theme.body};
    color:${({ theme }) => theme.text};
    border-color:${({ theme }) => theme.borderColor};
}
.input{
  color:${({ theme }) => theme.text};
}
.output{
  color:${({ theme }) => theme.text};
}



`;

export const lightTheme = {
  body: "#F5F5F5",
  text: "#828282",
  borderColor: "#D8D8D8",
  onHover: "#d3d3d3",
};

export const darkTheme = {
  body: "#282C34",
  text: "#ffffff",
  borderColor: "#1c2028",
  onHover: "black",
};
