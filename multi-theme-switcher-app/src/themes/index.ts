import theme1 from "./theme1";
import theme2 from "./theme2";
import theme3 from "./theme3";

// Interface representing the structure of a theme object
export interface Theme {
  background: string;
  color: string;
  fontFamily: string;
  [key: string]: string; // Allows other optional style keys (e.g., headerBg, cardShadow)
}

// Map theme names to actual theme objects
const themes: Record<string, Theme> = { theme1, theme2, theme3 };

export default themes;
