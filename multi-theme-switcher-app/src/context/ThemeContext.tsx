import React, { createContext, useContext, useEffect, useState } from "react";

// Import theme definitions (light, dark, colorful)
import theme1 from "../themes/theme1";
import theme2 from "../themes/theme2";
import theme3 from "../themes/theme3";

// Type representing the allowed theme names
export type ThemeType = "theme1" | "theme2" | "theme3";

// Interface representing the structure of a theme object
export interface Theme {
  background: string;
  color: string;
  fontFamily: string;
  [key: string]: string; // Allows other optional style keys (e.g., headerBg, cardShadow)
}

// Map theme names to actual theme objects
const themes: Record<ThemeType, Theme> = { theme1, theme2, theme3 };

// Define the structure of our ThemeContext
interface ThemeContextProps {
  theme: Theme; // Active theme object
  themeName: ThemeType; // Current theme name (e.g., "theme1")
  setThemeName: (name: ThemeType) => void; // Function to switch theme
}

// Create the actual context with default values
const ThemeContext = createContext<ThemeContextProps>({
  theme: theme1, // default theme
  themeName: "theme1",
  setThemeName: () => {},
});

// Custom hook to consume the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Provider component to wrap the app and supply theme context
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Load theme from localStorage or fallback to 'theme1'
  const [themeName, setThemeName] = useState<ThemeType>(
    () => (localStorage.getItem("app-theme") as ThemeType) || "theme1"
  );

  // Persist theme selection across page reloads
  useEffect(() => {
    localStorage.setItem("app-theme", themeName);
  }, [themeName]);

  // Define the context value to be passed down
  const value: ThemeContextProps = {
    theme: themes[themeName],
    themeName,
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
