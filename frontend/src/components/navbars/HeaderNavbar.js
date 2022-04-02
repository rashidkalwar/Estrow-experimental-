import { useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import NavUserMenu from 'src/components/navbars/NavUserMenu';
import NavDrawer, { pages } from 'src/components/navbars/NavDrawer';
import Link from 'src/modules/components/Link';
import ThemeToggler from 'src/theme/ThemeToggler';
import NavbarLogo from 'src/components/svgs/NavbarLogo';

const HeaderNavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', alignItems: 'center', px: 3 }}
      >
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link href="/">
            <NavbarLogo height="60" width="120" />
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setMobileMenu(!mobileMenu)}
            color="primary"
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            margin: 'auto',
          }}
        >
          <Link href="/">
            <NavbarLogo height="60" width="120" />
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            display: { xs: 'none', md: 'flex' },
            mr: 2,
          }}
        >
          <nav>
            <List
              role="menubar"
              sx={{
                display: 'flex',
                m: 0,
                p: 0,
              }}
            >
              {pages.map(({ name, href }) => (
                <ListItem sx={{ p: 1 }}>
                  <Link
                    href={href}
                    sx={{
                      textDecoration: 'none',
                      fontWeight: '500',
                      '&:hover': { opacity: '70%' },
                    }}
                  >
                    {name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
        <Box sx={{ m: 1 }}>
          <ThemeToggler />
        </Box>
        <Tooltip title="GitHub repository" enterDelay={300}>
          <IconButton
            component="a"
            color="primary"
            href="https://github.com/rashidkalwar/Estrow"
            data-ga-event-category="header"
            data-ga-event-action="github"
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <NavUserMenu />
        <NavDrawer mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </Container>
    </header>
  );
};
export default HeaderNavBar;
