import { CssBaseline, ThemeProvider } from '@mui/material';
import { DataProvider } from './context/DataContext';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <CssBaseline />
        <Navbar />
        <Dashboard />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;