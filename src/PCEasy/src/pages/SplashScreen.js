import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import imageLogo from "../../assets/fingerprint.png";

export default SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={imageLogo} />
      <Text style={styles.textTitle}>
        Punch Clock <Text style={styles.textEasy}>Easy</Text>{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  textTitle: {
    color: "#fff",
    fontSize: 14,
  },
  textEasy: {
    color: "#004AAD",
    letterSpacing: 4,
  },
});
