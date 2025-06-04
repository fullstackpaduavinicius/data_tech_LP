import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;