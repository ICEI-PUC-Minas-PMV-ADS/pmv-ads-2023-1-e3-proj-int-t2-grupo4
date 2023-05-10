import React, { useState, useEffect } from "react";
import {
  Menu,
  Appbar,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import fingerprint from "../../assets/registro.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getTimes, register } from "../services/apiServices";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default PointRegister = () => {
  const navigation = useNavigation();
  const [horaAtual, setHoraAtual] = useState(format(new Date(), "HH:mm:ss"));
  const [dataAtual, setDataAtual] = useState(
    format(new Date(), "EEEE, dd/MM/yyyy 'às' HH:mm:ss", { locale: ptBR })
  );
  const [isEntrada, setIsEntrada] = useState(true); // Estado para controlar se é entrada ou saída
  const [canRegister, setCanRegister] = useState(true); // Estado para controlar se é possível registrar novamente
  const route = useRoute();
  const userId = route.params.usuario;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(format(new Date(), "HH:mm:ss"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const registroPonto = async () => {
    if (!canRegister) return; // Retorna se não for possível registrar novamente

    let idUser = userId.id;
    let entrada = isEntrada ? 0 : 1; // Alternar entre 0 (entrada) e 1 (saída)
    setIsEntrada(!isEntrada); // Alternar o estado entre entrada e saída

    await register({
      idUser: idUser,
      data_registro: dataAtual,
      entrada: entrada,
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

    setCanRegister(false); // Desabilita o registro temporariamente

    setTimeout(() => {
      setCanRegister(true); // Habilita o registro após 10 segundos
    }, 10000);

    console.log(
      `Registro realizado! ${format(
        new Date(),
        "EEEE, dd/MM/yyyy 'às' HH:mm:ss",
        { locale: ptBR }
      )}`
    );
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
        <Button
          color={"#004aad"}
          style={styles.button}
          icon="account-clock"
          mode="contained"
        >
          Verificar espelho de ponto
        </Button>
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
    padding: 14,
    marginTop: 10,
    color: "#202020",
  },
  button: {
    padding: 5,
    borderRadius: 10,
  },
});
