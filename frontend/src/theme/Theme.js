export const light = {
  palette: {
    mode: 'light',
    primary: {
      main: '#002e54',
      dark: '#012440',
      light: '#406083',
    },
  },
  typography: {
    fontFamily: ['inter'].join(','),
    // fontFamily: ['roboto'].join(','),
    h3: {
      // fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '99px',
        },
        contained: {
          color: '#e2edf8',
        },
        outlined: {
          backgroundColor: '#e2edf8',
          '&:hover': {
            backgroundColor: '#d6dfe9',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1d5a8c',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '30%',
          border: '1px solid #c5e3ff',
        },
      },
    },
  },
};

export const dark = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#c5e3ff',
      light: '#f8ffff',
      dark: '#94b1cc',
    },
    background: {
      default: '#0a1320',
    },
  },
  typography: {
    fontFamily: ['inter'].join(','),
    // fontFamily: ['roboto'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '99px',
        },
        contained: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#78909c',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '30%',
          border: '1px solid #1d5a8c',
        },
      },
    },
  },
};

export default light;
