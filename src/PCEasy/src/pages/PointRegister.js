import React, { useState, useEffect } from "react";
import {
  Menu,
  Appbar,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import fingerprint from "../../assets/registro.png";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { getTimes, register } from "../services/apiServices";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default PointRegister = () => {
  const navigation = useNavigation();
  const [horaAtual, setHoraAtual] = useState(format(new Date(), "HH:mm:ss"));
  const [dataAtual, setDataAtual] = useState(
    format(new Date(), "dd/MM/yyyy 'às' HH:mm:ss", { locale: ptBR })
  );
  const [isEntrada, setIsEntrada] = useState(true); // Estado para controlar se é entrada ou saída
  const [canRegister, setCanRegister] = useState(true); // Estado para controlar se é possível registrar novamente
  const [lastTime, setLastTime] = useState(null); // Estado para armazenar o último registro
  const route = useRoute();
  const userId = route.params.usuario;
  const [blockNavigation, setBlockNavigation] = useState(true);

  // useEffect(() => {
  //   const onBeforeRemove = (e) => {
  //     if (blockNavigation) {
  //       e.preventDefault();
  //     }
  //   };

  //   navigation.addListener("beforeRemove", onBeforeRemove);

  //   return () => {
  //     navigation.removeListener("beforeRemove", onBeforeRemove);
  //   };
  // }, [blockNavigation, navigation]);

  // const handleLogout = () => {
  //   setBlockNavigation(false); // Permite a navegação para a tela de login
  //   navigation.navigate("Login");
  // };

  useEffect(() => {
    const timer = setInterval(() => {
      setDataAtual(
        format(new Date(), "dd/MM/yyyy 'às' HH:mm:ss", { locale: ptBR })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(format(new Date(), "HH:mm:ss"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchLastTime = async () => {
      const response = await getTimes(userId.cpf);
      if (response && response.length > 0) {
        setLastTime(response[response.length - 1]);
      }
    };

    fetchLastTime();
  }, [userId]);

  const registroPonto = async () => {
    if (!canRegister) return; // Retorna se não for possível registrar novamente

    let userCpf = userId.cpf;
    let entrada = isEntrada ? 0 : 1; // Alternar entre 0 (entrada) e 1 (saída)
    setIsEntrada(!isEntrada); // Alternar o estado entre entrada e saída

    await register({
      cpf: userCpf,
      data_registro: dataAtual,
      entrada: entrada,
    }).then((res) => {
      if (res) {
        setLastTime({
          cpf: userCpf,
          data_registro: dataAtual,
          entrada: entrada,
        });
      }
    });

    await getTimes(userId.cpf).then((response) => {
      if (response != null) {
        setLastTime(response[response.length - 1]);
      }
    });

    setCanRegister(false); // Desabilita o registro temporariamente

    setTimeout(() => {
      setCanRegister(true); // Habilita o registro após 10 segundos
    }, 10000);
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
          onPress={() => {
            navigation.navigate("Times", { usuario: userId });
          }}
        >
          Verificar espelho de ponto
        </Button>
        {lastTime && (
          <View style={styles.lastTimeContainer}>
            <Text style={styles.lastTimeTitle}>Último registro:</Text>
            <Text style={styles.lastTimeText}>
              Data: {lastTime.data_registro}
            </Text>
            <Text style={styles.lastTimeText}>
              {lastTime.entrada === 0 ? "Entrada" : "Saída"}
            </Text>
          </View>
        )}
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
  lastTimeContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  lastTimeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastTimeText: {
    marginTop: 5,
    fontSize: 16,
  },
});
