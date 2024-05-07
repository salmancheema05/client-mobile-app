import React, { createContext, useContext, ReactNode } from "react";

interface Theme {
  primary: {
    dark: string;
    light: string;
    bg: string;
    shadowColor: string;
    // Add more color definitions as needed
  };
}

const defaultTheme: Theme = {
  primary: {
    dark: "hsla(220, 16%, 50%, 1)",
    light: "#808080",
    bg: "white",
    shadowColor: "gray",
  },
};
const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
