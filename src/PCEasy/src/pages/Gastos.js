import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { loginUser } from "../services/GastosServicesDB"; // Importe sua função loginUser aqui
import UserInfo from "./UserInfo"; // Importe o componente UserInfo aqui

const LoginForm = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState(null);

  const handleLogin = async () => {
    try {
      // Chame a função loginUser com os dados de CPF e senha inseridos pelo usuário
      const usuarioLogado = await loginUser(cpf, senha);

      // Se houver um usuário correspondente, atualize o estado com os dados do usuário
      if (usuarioLogado) {
        setUsuario(usuarioLogado);
      } else {
        console.log("CPF ou senha inválidos."); // Trate o caso de CPF ou senha inválidos
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error); // Trate o erro caso ocorra
    }
  };

  return (
    <View style = {styles.container}>
      <Text>Formulário de Login</Text>
      
      <TextInput
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        placeholder="CPF"
      />
      <TextInput
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder="Senha"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      {usuario ? (
        <UserInfo usuario={usuario} /> // Use o componente UserInfo aqui
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

});
{[styles.button, styles.buttonText]}

export default LoginForm;
