import React from 'react'
import { LoginScreen } from './src/screens/Login'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  )
}
