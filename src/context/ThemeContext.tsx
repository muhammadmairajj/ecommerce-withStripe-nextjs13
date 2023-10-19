'use client';
import React, { createContext, useState } from "react";

// Define the type for your context value
interface ThemeContextValue {
  switchDark: () => void;
  switchLight: () => void;
  theme: string;
}

export const ThemeContext = createContext<ThemeContextValue>({
    switchDark: () => {},
    switchLight: () => {},
    theme: "light", 
  });

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(''); 
  const switchDark = (): void => {
    setTheme("dark");
  }

  const switchLight = (): void => {
    setTheme("light");
  }

  const contextValue: ThemeContextValue = {
    switchDark,
    switchLight,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${theme} anim`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;