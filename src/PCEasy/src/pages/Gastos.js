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
    <View>
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

export default LoginForm;
