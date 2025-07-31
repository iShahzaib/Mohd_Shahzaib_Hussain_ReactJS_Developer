import React, { createContext, useContext, useEffect, useState } from "react";
import theme1 from "../themes/theme1";
import theme2 from "../themes/theme2";
import theme3 from "../themes/theme3";

export type ThemeType = "theme1" | "theme2" | "theme3";

export interface Theme {
  background: string;
  color: string;
  fontFamily: string;
  [key: string]: string;
}

const themes: Record<ThemeType, Theme> = { theme1, theme2, theme3 };

interface ThemeContextProps {
  theme: Theme;
  themeName: ThemeType;
  setThemeName: (name: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: theme1,
  themeName: "theme1",
  setThemeName: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeType>(
    () => (localStorage.getItem("app-theme") as ThemeType) || "theme1"
  );

  useEffect(() => {
    localStorage.setItem("app-theme", themeName);
  }, [themeName]);

  const value: ThemeContextProps = {
    theme: themes[themeName],
    themeName,
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
