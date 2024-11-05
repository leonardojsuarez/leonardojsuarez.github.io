import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import lightTheme from './themes/LigthTheme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)