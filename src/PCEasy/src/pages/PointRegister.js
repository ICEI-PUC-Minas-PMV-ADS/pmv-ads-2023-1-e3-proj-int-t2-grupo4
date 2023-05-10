import React, { useState, useEffect } from "react";
import { Menu, Appbar, Provider as PaperProvider } from "react-native-paper";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import fingerprint from "../../assets/registro.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getTimes, register } from "../services/apiServices";

export default PointRegister = () => {
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());
  const [dataAtual, setDtataAtual] = useState(new Date().toString());
  const route = useRoute();
  const userId = route.params.usuario;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const registroPonto = async () => {
    let idUser = userId.id;
    let entrada = new Date(horaAtual) < new Date("09:00:00") ? 0 : 1;
    await register({
      idUser: 2,
      data_registro: "12/12/12",
      entrada: "0",
    }).then((res) => {
      if (res) {
        console.log(res);
      }
    });

    await getTimes(userId.id).then((response) => {
      if (response != null) {
        console.log(response.data);
      }
    });
    console.log(`Registro realizado! ${(horaAtual, dataAtual)}`);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.Content title="Registro de ponto" />
      </Appbar.Header>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={registroPonto} style={styles.imageWrapper}>
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
