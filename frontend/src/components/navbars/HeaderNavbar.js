import { useState } from 'react';
import { default as NextLink } from 'next/link';
import { useTheme } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link as MuiLink } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
// import Slide from '@mui/material/Slide';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles, styled } from '@mui/styles';

// import Link from 'src/modules/components/Link';
import ThemeToggler from 'src/theme/ThemeToggler';
import NavbarLogo from 'src/components/svgs/NavbarLogo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Navigation = styled('nav')(({ theme }) => ({
  '& ul': {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
  },
  '& li': {
    color: theme.palette.text.primary,
    ...theme.typography.body2,
    fontWeight: 700,
    '& > a, & > div': {
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      '&:hover, &:focus': {
        // backgroundColor:
        //   theme.palette.mode === 'dark'
        //     ? theme.palette.primaryDark[700]
        //     : theme.palette.grey[50],
        // color:
        //   theme.palette.mode === 'dark'
        //     ? theme.palette.primaryDark[200]
        //     : theme.palette.grey[700],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'initial',
        },
      },
    },
    '& > div': {
      cursor: 'default',
    },
  },
}));

const pages = [
  { id: '0', name: 'Products', href: '#' },
  { id: '1', name: 'Pricing', href: '#' },
  { id: '2', name: 'Blog', href: '#' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderNavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navigation>
      <Container
        maxWidth="lg"
        disableGutters
        // className={classes.root}
        sx={{ display: 'flex', alignItems: 'center', px: 3 }}
      >
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NextLink href="/" passHref>
            <MuiLink sx={{ cursor: 'pointer' }}>
              <NavbarLogo />
            </MuiLink>
          </NextLink>
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
          <NextLink href="/" passHref>
            <MuiLink sx={{ cursor: 'pointer' }}>
              <NavbarLogo />
            </MuiLink>
          </NextLink>
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
                <NextLink href={href} passHref>
                  <ListItem sx={{ p: 0, '&:hover': { opacity: '70%' } }}>
                    <MuiLink
                      sx={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        mx: 1,
                      }}
                    >
                      {name}
                    </MuiLink>
                  </ListItem>
                </NextLink>
              ))}
            </List>
          </nav>
        </Box>
        <ThemeToggler />
        <Box sx={{ margin: '5px' }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} size="small">
              <PersonIcon color="primary" fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>

        {/* <Box
            sx={{
              display: {
                  xs: 'flex',
                  md: 'none',
                },
            }}
            orientation="vertical"
            > */}
        <Drawer
          id="menu-appbar"
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
          }}
          anchor="left"
          open={mobileMenu}
          onClose={() => setMobileMenu(!mobileMenu)}
        >
          <List sx={{ width: '70vw' }}>
            {pages.map(({ name, href }) => (
              <NextLink href={href} passHref>
                <ListItem
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    p: 0,
                    m: 0,
                    '&:hover': {
                      opacity: '70%',
                    },
                    height: '5vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MuiLink
                    sx={{
                      textDecoration: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      mx: 1,
                      '&:hover': {
                        backgroundColor: '#0000',
                        opacity: '70%',
                      },
                    }}
                  >
                    {name}
                  </MuiLink>
                </ListItem>
              </NextLink>
            ))}
          </List>
        </Drawer>
      </Container>
    </Navigation>
  );
};
export default HeaderNavBar;
