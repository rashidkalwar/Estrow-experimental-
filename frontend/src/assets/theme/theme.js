import { createContext, useState, useEffect } from "react";
import "@fontsource/barlow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
      dark: "#0069c0",
      light: "#6ec6ff",
    },
  },
  typography: {
    fontFamily: ["barlow"].join(","),
    fontSize: 16,
    color: "black",
    button: {
      fontSize: 17,
    },
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196f3",
      dark: "#0069c0",
      light: "#6ec6ff",
    },
    background: {
      default: "#000a12",
    },
  },
  typography: {
    fontFamily: ["barlow"].join(","),
    fontSize: 16,
    color: "black",
    button: {
      fontSize: 17,
    },
  },
});

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? dark : light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
