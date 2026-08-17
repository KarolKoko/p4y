import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../i18n.ts'
import './reset.css'
import './index.css'
import { createTheme, ThemeProvider } from 'styled-components'

const theme = createTheme({
    wrapper: "1800px"
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </StrictMode>,
)
