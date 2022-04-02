import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';

import Link from 'src/modules/components/Link';
import NavbarLogo from 'src/components/svgs/NavbarLogo';
import { currentTheme as theme } from 'src/theme/CustomThemeProvider';

export const pages = [
  { id: '0', name: 'Products', href: '#' },
  { id: '1', name: 'Pricing', href: '#' },
  { id: '2', name: 'Blog', href: '#' },
];

const NavDrawer = (props) => {
  return (
    <React.Fragment key={'left'}>
      <Drawer
        id="menu-appbar"
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
        }}
        anchor="left"
        open={props.mobileMenu}
        onClose={() => props.setMobileMenu(!props.mobileMenu)}
      >
        <List
          sx={{
            width: '70vw',
            height: '100%',
            m: 0,
            p: 0,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <ListItem sx={{ height: '12vh', mb: 2, justifyContent: 'center' }}>
            <Link href="/">
              <NavbarLogo height="70" width="140" />
            </Link>
          </ListItem>
          {pages.map(({ name, href }) => (
            <ListItem
              key={name}
              button
              sx={{
                p: 0,
                m: 0,
                width: '100%',
                height: '7vh',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              <Link
                href={href}
                sx={{
                  textDecoration: 'none',
                  fontSize: '18px',
                  mx: 1,
                }}
              >
                {name}
              </Link>
            </ListItem>
          ))}
          <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
            <IconButton
              onClick={() => props.setMobileMenu(!props.mobileMenu)}
              size="large"
            >
              <ArrowBackIosNewIcon color="primary" fontSize="small" />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default NavDrawer;

// this can be used with a useState hook like this

{
  /* <NavDrawer
  mobileMenu={mobileMenu}
  setMobileMenu={setMobileMenu}
/>; */
}
