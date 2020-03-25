import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleTheme() {
  return (
    <ThemeContext.Consumer>
      {context => {
        const { toggleTheme } = context;
        return (
          <button onClick={toggleTheme} className="toggleBtn">
            Toggle theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}
