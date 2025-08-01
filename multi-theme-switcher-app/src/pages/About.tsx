import { useTheme } from "../context/ThemeContext";

// About page component — introduces the app's purpose and functionality
export default function About() {
  // Get the current theme from the ThemeContext
  const { theme } = useTheme();

  return (
    <div
      className="theme-transition"
      style={{
        background: theme.background, // Theme-based background color
        color: theme.color, // Theme-based text color
        fontFamily: theme.fontFamily, // Apply selected font from theme
      }}
    >
      <div
        className="about-content"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Page title */}
        <h2>About Page</h2>

        {/* App description */}
        <p style={{ marginTop: 12, lineHeight: 1.6 }}>
          This is a demo React app showcasing a multi-theme switcher. You can
          switch between three unique themes using the dropdown in the header.
          Each theme changes the layout, fonts, colors, and overall structure of
          the app to provide a visually distinct experience.
        </p>
      </div>
    </div>
  );
}
