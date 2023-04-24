import React, { useState, useEffect } from "react";
import { Menu, Appbar, Provider as PaperProvider } from "react-native-paper";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fingerprint from "../../assets/registro.png";

export default PointRegister = () => {
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const registroPonto = () => {
    console.log(`Registro realizado! ${horaAtual}`);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.Content title="Registro de ponto" />
      </Appbar.Header>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image style={styles.logo} source={fingerprint} />
          </TouchableOpacity>
          <Text style={styles.horaAtual}>{horaAtual}</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "#202020",
    padding: 5,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  appbarHeader: {
    backgroundColor: "#004aad",
  },
  horaAtual: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 20,
    marginTop: 10,
    color: "#202020",
  },
});
