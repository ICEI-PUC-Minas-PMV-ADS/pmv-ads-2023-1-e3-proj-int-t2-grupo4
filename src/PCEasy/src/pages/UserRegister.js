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
import { insertUser, getUserByCpf } from "../services/GastosServicesDB";
import { useNavigation } from "@react-navigation/native";
import { checkCpfOnApi } from "../services/apiServices";

export default function AlimentarDB() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");
  const [idade, setIdade] = useState("");
  const [cpfError, setCpfError] = useState('');
  const navigation = useNavigation();

  const handleFormSubmit = async () => {
    if (nome && cpf && senha && email && endereco && idade) {


      if (cpf.length !== 11) {
        Alert.alert("Erro", "CPF inválido. Insira um CPF válido com 11 dígitos.");
        return;
      }

      // Verificar duplicidade do CPF no banco de dados local
      const existingUser = await getUserByCpf(cpf);
      if (existingUser) {
        Alert.alert("Erro", "CPF já cadastrado. Por favor, insira um CPF diferente!!");
        return;
      }

      // Verificar duplicidade do CPF na API externa
      const cpfUsedOnApi = await checkCpfOnApi(cpf);
      console.log(cpfUsedOnApi);
      if (cpfUsedOnApi) {
        Alert.alert("Erro", "CPF já foi usado em outro cadastro na API. Por favor, insira um CPF diferente.");
        return;
      }

      console.log('Informações salvas:', { nome, cpf, senha, email, endereco, idade });
      // Todos os campos estão preenchidos e CPF não está duplicado, pode salvar as informações
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
    } else {
      // Exibir mensagem de erro informando que todos os campos são obrigatórios
      Alert.alert("Erro", "Todos os campos são obrigatórios. Preencha todos os campos antes de salvar.");
    }
  };

  const handleCpfChange = (text) => {
    const formattedCpf = text.replace(/\D/g, '');

    if (formattedCpf.length === 11) {
      setCpf(formattedCpf);
      setCpfError('');
    } else {
      setCpf(formattedCpf);
      setCpfError('CPF inválido. O CPF deve ter 11 dígitos.');
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
        <TextInput style={styles.input} value={cpf} onChangeText={(text) => {
          handleCpfChange(text);
          setCpf(text);
        }}
          error={cpfError !== ''} />
        {cpfError !== '' && <Text style={styles.error}>{cpfError}</Text>}
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
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  }

});
