import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Cyan - futuristic tech color
      light: '#4dd0e1',
      dark: '#0097a7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7c4dff', // Purple - futuristic accent
      light: '#b47cff',
      dark: '#3f1dcb',
      contrastText: '#fff',
    },
    background: {
      default: '#121212',
      paper: 'rgba(18, 18, 18, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ffea00',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#00e676',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '0.02em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          padding: '8px 16px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'all 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          boxShadow: '0 4px 20px 0 rgba(0, 188, 212, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.2)',
          '&:hover': {
            boxShadow: '0 8px 25px 0 rgba(0, 188, 212, 0.3), 0 10px 15px -5px rgba(0, 188, 212, 0.4)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(18, 18, 18, 0.8)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(18, 18, 18, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.23)',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#00bcd4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00bcd4',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
});

export default theme; 