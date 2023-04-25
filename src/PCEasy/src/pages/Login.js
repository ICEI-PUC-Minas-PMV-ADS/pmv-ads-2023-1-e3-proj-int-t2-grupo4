import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../services/GastosServicesDB"; // Importe sua função loginUser aqui
import { useNavigation } from "@react-navigation/native"; // Importe o hook useNavigation do React Navigation

const LoginForm = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation(); // Inicialize o hook useNavigation

  const handleLogin = async () => {
    try {
      // Chame a função loginUser com os dados de CPF e senha inseridos pelo usuário
      const usuarioLogado = await loginUser(cpf, senha);

      // Se houver um usuário correspondente, navegue para a página UserInfo com os dados do usuário
      if (usuarioLogado) {
        navigation.navigate("Home", { usuario: usuarioLogado });
      } else {
        console.log("CPF ou senha inválidos."); // Trate o caso de CPF ou senha inválidos
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error); // Trate o erro caso ocorra
    }
  };

  const handleRegister = (navigation) => {
    navigation.navigate('UserRegister');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Formulário de Login</Text>
      <TextInput style={styles.input}
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        placeholder="CPF"
      />
      <TextInput style={styles.input}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder="Senha"
        secureTextEntry
      />
      <Button style={styles.button} title="Login" onPress={handleLogin} />
      <Button style={styles.button} title="Registrar" onPress={() => handleRegister(navigation)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#4287f5",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {

  }
});


export default LoginForm;
