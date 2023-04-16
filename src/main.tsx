import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';
import { mainTheme } from './consts/themes';

createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider theme={mainTheme}>
		<App />
	</ThemeProvider>
);
