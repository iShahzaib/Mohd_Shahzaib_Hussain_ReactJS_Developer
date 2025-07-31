import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { themeName, setThemeName } = useTheme();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#ddd",
      }}
    >
      <h1>Multi-Theme Switcher App</h1>
      <select
        value={themeName}
        onChange={(e) => setThemeName(e.target.value as any)}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
}
