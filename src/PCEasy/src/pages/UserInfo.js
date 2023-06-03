import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteUser, getUserById } from "../services/GastosServicesDB";
import { LogBox } from "react-native";
import Header from "../components/Header";
import { TextInput, Appbar } from "react-native-paper";

const Perfil = ({ usuario }) => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [idade, setIdade] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [blockNavigation, setBlockNavigation] = useState(true);

  useEffect(() => {
    const onBeforeRemove = (e) => {
      if (blockNavigation) {
        e.preventDefault();
      }
    };

    navigation.addListener("beforeRemove", onBeforeRemove);

    return () => {
      navigation.removeListener("beforeRemove", onBeforeRemove);
    };
  }, [blockNavigation, navigation]);

  const handleLogout = () => {
    setBlockNavigation(false); // Permite a navegação para a tela de login
    LogBox.ignoreLogs([
      "Internal React error: Attempted to capture a commit phase error inside a detached tree",
    ]);
    navigation.navigate("Login");
  };

  const handleUserUpdate = (navigation) => {
    if (!usuario) navigation.navigate("UserUpdate", { userId: id });
    else navigation.navigate("UserUpdate", { userId: usuario.id });
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      LogBox.ignoreLogs([
        "Internal React error: Attempted to capture a commit phase error inside a detached tree",
      ]);
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    teste(route);

    function teste(route) {
      const { test } =
        route.params == null || route.params == undefined ? 0 : route.params;
      setId(test);
      if (test !== undefined) {
        const fetchUserData = async () => {
          const userData = await getUserById(test);
          setNome(userData.nome);
          setCpf(userData.cpf);
          setSenha(userData.senha);
          setEmail(userData.email);
          setEndereco(userData.endereco);
          setDataRegistro(userData.data_registro);
          setIdade(userData.idade);
        };
        fetchUserData();
      }
    }
  }, []);

  return (
    <View>
      <Header title={"Perfil"}>
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Header>

      {!usuario ? (
        <View style={styles.container}>
          <Text style={styles.label}>Informações do Usuário</Text>

          <Text>Nome:</Text>
          <Text style={styles.input}> {nome} </Text>
          <Text>Email:</Text>
          <Text style={styles.input}> {email} </Text>
          <Text>CPF:</Text>
          <Text style={styles.input}> {cpf} </Text>
          <Text>Senha:</Text>
          <Text style={styles.input}> {senha} </Text>
          <Text>Endereço:</Text>
          <Text style={styles.input}> {endereco} </Text>
          <Text>Idade:</Text>
          <Text style={styles.input}> {idade} </Text>
          <Text>{dataRegistro}</Text>
          <Button
            style={[styles.button, styles.buttonText]}
            title="Atualizar Informações"
            onPress={() => handleUserUpdate(navigation)}
          />
          <Button
            mode="contained"
            title="Excluir conta"
            color={"red"}
            onPress={() => setShowConfirmation(true)}
          ></Button>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.label}>Informações do Usuário</Text>
          <Text>Nome:</Text>
          <Text style={styles.input}> {usuario.nome} </Text>
          <Text>Email:</Text>
          <Text style={styles.input}> {usuario.email} </Text>
          <Text>CPF:</Text>
          <Text style={styles.input}> {usuario.cpf} </Text>
          <Text>Senha:</Text>
          <Text style={styles.input}> {usuario.senha} </Text>
          <Text>Endereço:</Text>
          <Text style={styles.input}> {usuario.endereco} </Text>
          <Text>Idade:</Text>
          <Text style={styles.input}> {usuario.idade} </Text>
          <Text>Data de Registro:</Text>
          <Text style={styles.input}> {usuario.data_registro} </Text>
          <Button
            style={[styles.button, styles.buttonText]}
            title="Atualizar Informações"
            onPress={() => handleUserUpdate(navigation)}
          />
          <Button
            mode="contained"
            title="Excluir conta"
            color={"red"}
            style={styles.button}
            onPress={() => setShowConfirmation(true)}
          ></Button>
        </View>
      )}

      {/* Confirmation Dialog */}
      <Modal visible={showConfirmation} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmationText}>
              Deseja mesmo deletar a conta?
            </Text>
            <View style={styles.modalButtons}>
              <Button
                title="Sim"
                color="red"
                onPress={() => handleDeleteUser(usuario ? usuario.id : id)}
              />
              <Button title="Não" onPress={() => setShowConfirmation(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {},
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Perfil;
