import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// Header component provides the top navigation bar with theme switcher dropdown and page links
export default function Header() {
  // Access theme values and the current selected theme name from context
  const { themeName, setThemeName, theme } = useTheme();

  return (
    <header
      className="header-root"
      style={{
        // Apply theme-based styles to header
        backgroundColor: theme.headerBg,
        color: theme.headerColor,
        padding: `0 ${theme.spacing}`,
        fontFamily: theme.fontFamily,
        boxShadow: theme.boxShadow || "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left: Logo & App title */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Emoji icon for branding (placeholder) */}
        <span className="header-icon" role="img" aria-label="Theme Icon">
          🌓
        </span>
        <span className="header-title">Multi-Theme Switcher App</span>
      </div>

      {/* Center: Navigation Links */}
      <nav className="header-nav">
        <Link to="/" style={{ color: theme.headerColor }}>Home</Link>
        <Link to="/about" style={{ color: theme.headerColor }}>About</Link>
        <Link to="/contact" style={{ color: theme.headerColor }}>Contact</Link>
      </nav>

      {/* Right: Theme Switcher Dropdown */}
      <select
        className="header-select"
        value={themeName}
        // Update the selected theme using context setter
        onChange={(e) => setThemeName(e.target.value as any)}
        aria-label="Switch Theme"
        style={{
          borderRadius: theme.borderRadius,
          fontFamily: theme.fontFamily,
          background: theme.background,
          color: theme.color,
        }}
      >
        {/* Theme options */}
        <option value="theme1">🌞 Minimalist (Theme 1)</option>
        <option value="theme2">🌚 Dark Mode (Theme 2)</option>
        <option value="theme3">🌈 Colorful (Theme 3)</option>
      </select>
    </header>
  );
}
