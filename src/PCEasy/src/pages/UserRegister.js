import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { insertTime, insertUser } from "../services/GastosServicesDB";
import { useNavigation } from "@react-navigation/native";

export default function AlimentarDB() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");
  const [idade, setIdade] = useState("");
  const navigation = useNavigation();
  const handleFormSubmit = async () => {
    // Chamar a função insertUser para inserir os dados no banco de dados
    const result = await insertUser({
      nome,
      cpf,
      senha,
      email,
      endereco,
      data_registro: dataRegistro,
      idade,
    });

    if (result > 0) {
      Alert.alert("Sucesso", "Dados inseridos com sucesso!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
      // Limpar os campos do formulário após a inserção
      setNome("");
      setCpf("");
      setSenha("");
      setEmail("");
      setEndereco("");
      setDataRegistro("");
      setIdade("");
    } else {
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao inserir os dados no banco de dados."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/registro.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.label}>CPF:</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
        />
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
});
