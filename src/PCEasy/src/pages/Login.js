import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
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
    </View>
  );
};

export default LoginForm;
