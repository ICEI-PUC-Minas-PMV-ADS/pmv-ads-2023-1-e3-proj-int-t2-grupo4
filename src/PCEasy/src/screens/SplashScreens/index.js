import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from '../../components'
import imageLogo from '../../../assets/fingerprint.png'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={imageLogo} />
      <CustomText style={styles.textTitle}>Punch Clock Easy</CustomText>
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
  logo: {
    height: 100,
    width: 100,
    alignItems: 'stretch'
  }
});
