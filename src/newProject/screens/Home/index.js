import * as React from "react";
import { Appbar } from "react-native-paper";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fingerprint from "../../assets/registro.png";

export const Home = () => {
  const registroPonto = () => {
    console.log("Registro realizado!");
  };

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaProvider>
      {/* conteúdo do seu aplicativo */}
      <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.Content title="Registro de Ponto" color="white" />
          <Appbar.Action
            icon="dots-vertical"
            color="white"
            onPress={_handleMore}
          />
        </Appbar.Header>
        <View style={styles.content}>
          <TouchableOpacity onPress={registroPonto}>
            <View style={styles.imageWrapper}>
              <Image source={fingerprint} style={styles.logo} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202020",
    borderBottomColor: "#000",
  },
  imageWrapper: {
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "white",
    padding: 5,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  appbar: {
    backgroundColor: "#004AAD",
  },
});
