import React from "react";

export default function ToggleTheme({ stheme, stogleTheme }) {
  console.log(stheme);
  return <div onClick={stogleTheme}>{stheme === "dark" ? "DARK" : "LITE"}</div>;
}
