import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { themeName, setThemeName, theme } = useTheme();

  return (
    <header
      className="header-root"
      style={{
        backgroundColor: theme.headerBg,
        color: theme.headerColor,
        padding: `0 ${theme.spacing}`,
        fontFamily: theme.fontFamily,
        boxShadow: theme.boxShadow || "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginRight: 16,
            letterSpacing: 1,
          }}
        >
          🌓
        </span>
        <span
          className="header-title"
          style={{ fontWeight: "bold", fontSize: 20 }}
        >
          Multi-Theme Switcher App
        </span>
      </div>

      <select
        className="header-select"
        value={themeName}
        onChange={(e) => setThemeName(e.target.value as any)}
        style={{
          borderRadius: theme.borderRadius,
          fontFamily: theme.fontFamily,
          background: theme.background,
          color: theme.color,
        }}
        aria-label="Switch Theme"
      >
        <option value="theme1">🌞 Minimalist (Theme 1)</option>
        <option value="theme2">🌚 Dark Sidebar (Theme 2)</option>
        <option value="theme3">🌈 Colorful Cards (Theme 3)</option>
      </select>
    </header>
  );
}
