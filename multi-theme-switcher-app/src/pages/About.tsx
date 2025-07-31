import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <div
      className="theme-transition"
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.fontFamily,
      }}
    >
      <div className="about-content">
        <h2>About Page</h2>
        <p>
          This is a demo React app showcasing a multi-theme switcher. You can
          switch between three unique themes using the dropdown in the header.
          Each theme changes the layout, fonts, colors, and overall structure of
          the app.
        </p>
      </div>
    </div>
  );
}
