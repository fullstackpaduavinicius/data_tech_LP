import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3a5a78', // Azul profissional
    },
    secondary: {
      main: '#e0a96d', // Dourado/bege para contrastar
    },
    background: {
      default: '#f9f5f0', // Bege claro para fundo
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
  },
});

export default theme;