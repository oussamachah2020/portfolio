"use client";
import { ReactNode, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (typeof window !== "undefined" &&
      (window.localStorage.getItem("ui.theme") as "light" | "dark")) ||
      "dark"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("ui.theme", val);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
