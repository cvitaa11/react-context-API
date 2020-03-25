import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ToggleTheme extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return (
      <button
        onClick={toggleTheme}
        style={{ borderRadius: 3, height: "2rem", cursor: "pointer" }}
      >
        Toggle theme
      </button>
    );
  }
}
