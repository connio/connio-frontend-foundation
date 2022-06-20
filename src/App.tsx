import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { lightTheme } from './constants/theme'
import { LayoutSettingsProvider } from './contexts/layout-settings/context'
import { Routes, Route, Navigate } from 'react-router-dom'
import ModuleRouter from './ModuleRouter'

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
          <Routes>
            <Route path="/" element={<Navigate to="/module/home" />} />
            <Route path="/module/:moduleId" element={<ModuleRouter />} />
          </Routes>
        </Box>
      </LayoutSettingsProvider>
    </ThemeProvider>
  )
}

export default App
