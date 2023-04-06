import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = () => {
  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>
        Punch Clock
        <Text color="#004AAD" letterSpacing={'4px'}>
          Easy
        </Text>
      </Text>
    </Container>
  )
}
