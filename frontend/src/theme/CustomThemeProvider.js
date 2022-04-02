import { createContext, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { light, dark } from 'src/theme/Theme';

let currentTheme;

export const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? createTheme(dark) : createTheme(light);
  currentTheme = theme;
  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true';
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

export default CustomThemeProvider;

export { currentTheme };
