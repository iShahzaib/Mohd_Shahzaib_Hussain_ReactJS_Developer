import React, { createContext, useContext, useEffect, useState } from 'react';
import theme1 from '../themes/theme1';
import theme2 from '../themes/theme2';
import theme3 from '../themes/theme3';

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

const themes = { theme1, theme2, theme3 };

const ThemeContext = createContext<{
  theme: any;
  themeName: ThemeType;
  setThemeName: (name: ThemeType) => void;
}>({ theme: theme1, themeName: 'theme1', setThemeName: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeType>(() =>
    (localStorage.getItem('app-theme') as ThemeType) || 'theme1'
  );

  useEffect(() => {
    localStorage.setItem('app-theme', themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
