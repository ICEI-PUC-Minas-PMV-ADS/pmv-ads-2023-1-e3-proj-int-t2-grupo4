import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import { loginUser } from "../services/GastosServicesDB"; // Importe sua função loginUser aqui
import { useNavigation } from "@react-navigation/native"; // Importe o hook useNavigation do React Navigation

const LoginForm = () => {
  const [user, setUser] = useState(""); // Correção na desestruturação
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation(); // Inicialize o hook useNavigation

  const handleLogin = async () => {
    if (cpf === "admin" && senha === "admin123") {
      // Dados de login corretos, navegue para a página do administrador
      navigation.navigate("HomeAdmin");
    } else {
      try {
        // Chame a função loginUser com os dados de CPF e senha inseridos pelo usuário
        const usuarioLogado = await loginUser(cpf, senha);

        // Se houver um usuário correspondente, navegue para a página UserInfo com os dados do usuário
        if (usuarioLogado) {
          let userData = JSON.stringify(usuarioLogado);
          userType(userData);
          navigation.navigate("Home", { usuario: usuarioLogado });
        } else {
          Alert.alert("CPF ou senha inválidos."); // Trate o caso de CPF ou senha inválidos
        }
      } catch (error) {
        console.error("Erro ao realizar login:", error); // Trate o erro caso ocorra
      }
    }
  };

  const userType = (userData) => {
    const usuario = JSON.parse(userData, (key, value) => {
      if (key === "data_registro") {
        return new Date(value);
      }
      return value;
    });
    class Usuario {
      constructor(id, nome, cpf, senha, email, endereco, data_registro, idade) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.email = email;
        this.endereco = endereco;
        this.data_registro = data_registro;
        this.idade = idade;
      }
    }
    const usuarioTipado = new Usuario(
      usuario.id,
      usuario.nome,
      usuario.cpf,
      usuario.senha,
      usuario.email,
      usuario.endereco,
      usuario.data_registro,
      usuario.idade
    );
    console.log(usuarioTipado.id);
    setUser(usuarioTipado.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.labelLogin}>Formulário de Login</Text>
        <TextInput
          style={styles.input}
          value={cpf}
          onChangeText={(text) => setCpf(text)}
          placeholder="CPF"
        />
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder="Senha"
          secureTextEntry
        />
        <Button
          mode="contained"
          style={styles.buttons}
          labelStyle={styles.buttonText}
          onPress={handleLogin}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020",
  },

  labelLogin: {
    fontSize: 32,
    color: "#066a75",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 30,
  },

  formContainer: {
    backgroundColor: "#FFF",
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

  buttons: {
    margin: 4,
    backgroundColor: "#099DAD",
    borderRadius: 5,
    padding: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default LoginForm;
