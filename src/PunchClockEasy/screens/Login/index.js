import React, { useState } from "react";
import { Alert } from "react-native";
import { Container, Title, Input, Button, ButtonText } from "./styles";

export const LoginScreen = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (matricula === "123" && senha === "senha123") {
      Alert.alert("Login realizado com sucesso!");
    } else if (matricula === "" || senha === "") {
      alert("Por favor, preencha os campos de matrícula e senha.");
    } else {
      Alert.alert("Matrícula ou senha inválidos!");
    }
    // Lógica de verificação de credenciais
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Matrícula"
        keyboardType="numeric"
        value={matricula}
        onChangeText={setMatricula}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};
