import React from 'react'
import { AppLayout } from './packages-local/app-layout'
import { BaseLayout } from './packages-local/base-layout'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <div className="App">
          <AppLayout></AppLayout>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default App
