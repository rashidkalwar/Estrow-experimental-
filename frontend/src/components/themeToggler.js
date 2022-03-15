import { useContext } from "react";
import { ThemeContext } from "../assets/theme/theme";
import { IconButton, Container } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ThemeToggler = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <Container component="main" maxWidth="xs">
      <IconButton aria-label="toggle dark theme" onClick={toggleTheme}>
        {isDark ? (
          <LightModeOutlinedIcon color="primary" />
        ) : (
          <DarkModeOutlinedIcon color="primary" />
        )}
      </IconButton>
    </Container>
  );
};

export default ThemeToggler;
