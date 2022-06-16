import React from 'react'
import { AppLayout } from './components/app-layout'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { lightTheme } from './constants/theme'
import { LayoutSettingsProvider } from './contexts/layout-settings/context'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <LayoutSettingsProvider>
        <Box
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
          }}
        >
            <Home />
        </Box>
      </LayoutSettingsProvider>
    </ThemeProvider>
  )
}

export default App
