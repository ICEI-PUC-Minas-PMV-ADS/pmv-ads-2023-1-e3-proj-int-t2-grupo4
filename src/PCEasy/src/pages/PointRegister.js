import React, { useState, useEffect } from "react";
import {
  Menu,
  Appbar,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  BackHandler,
} from "react-native";
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
  const [ultimaOcorrencia, setUltimaOcorrencia] = useState(null);

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
        setUltimaOcorrencia(
          response[response.length - 1].entrada === 0 ? "Entrada" : "Saída"
        );
      }
    };

    fetchLastTime();
  }, [userId]);

  const registroPonto = async () => {
    if (!canRegister) return;

    let userCpf = userId.cpf;
    let entrada = ultimaOcorrencia === "Entrada" ? 1 : 0;
    setUltimaOcorrencia(entrada === 0 ? "Entrada" : "Saída");

    await register({
      cpf: userCpf,
      data_registro: dataAtual,
      entrada: entrada,
    }).then(async (res) => {
      if (res) {
        await getTimes(userId.cpf).then((response) => {
          if (response != null) {
            setLastTime(response[response.length - 1]);
          }
        });
      }
    });

    await getTimes(userId.cpf).then((response) => {
      if (response != null) {
        setLastTime(response[response.length - 1]);
      }
    });

    setCanRegister(false);

    setTimeout(() => {
      setCanRegister(true);
    }, 10000);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    if (navigation.isFocused()) {
      // Verifica se a tela atual é a tela específica
      return true; // Bloqueia o botão de voltar físico do dispositivo
    }
    return false; // Permite o comportamento padrão do botão de voltar
  };
  const proximaOcorrencia =
    lastTime && lastTime.entrada === 0 ? "Entrada" : "Saída";

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
            <Text style={styles.lastTimeText}>{proximaOcorrencia}</Text>
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
