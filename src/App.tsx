import React from 'react'
import { AppLayout } from './packages-local/app-layout'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { lightTheme } from './constants/theme'
import { LayoutSettingsProvider } from './contexts/layout-settings/context'

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
          <div className="App">
            <AppLayout></AppLayout>
          </div>
        </Box>
      </LayoutSettingsProvider>
    </ThemeProvider>
  )
}

export default App
