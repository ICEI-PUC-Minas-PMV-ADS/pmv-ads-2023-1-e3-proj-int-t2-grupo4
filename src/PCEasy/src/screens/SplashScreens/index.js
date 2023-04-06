import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Logo } from '../../components'


export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text  >Punch Clock <Text color="#004AAD" letterSpacing={4}>Easy</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
