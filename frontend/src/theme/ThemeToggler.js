import { useContext } from 'react';
import { ThemeContext } from 'src/theme/CustomThemeProvider';
import { IconButton, Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const ThemeToggler = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <Box>
      <Tooltip title={isDark ? 'Turn on the light' : 'Turn off the light'}>
        <IconButton
          color="primary"
          aria-label="toggle dark theme"
          onClick={toggleTheme}
          size="small"
        >
          {isDark ? (
            <LightModeOutlinedIcon fontSize="small" />
          ) : (
            <DarkModeOutlinedIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ThemeToggler;
