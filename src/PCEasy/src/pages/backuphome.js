import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { getUser, deleteUser } from "../services/GastosServicesDB";
import { RadioButton, TextInput, Appbar } from "react-native-paper";
import Header from "../components/Header";
import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    // Função para buscar os dados do banco de dados
    const fetchUsuarios = async () => {
      const results = await getUser();
      setUsuarios(results);
    };
    fetchUsuarios();
  }, [isFocused]); // Adicione o isFocused como dependência no useEffect para que a lista seja atualizada sempre que a tela estiver focada

  const handleExcluir = (item) => {
    deleteUser(item.id)
      .then(() => {
        // Atualize a lista de usuários após a exclusão
        const updatedUsuarios = usuarios.filter(
          (usuario) => usuario.id !== item.id
        );
        setUsuarios(updatedUsuarios);
      })
      .catch((error) => console.error("Erro ao excluir usuário:", error));
  };

  const renderUsuario = ({ item }) => (
    <View style={styles.usuarioContainer}>
      <Header title={"Abastecimento"} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" />
        {item && (
          <Appbar.Action icon="trash-can" onPress={() => handleExcluir(item)} />
        )}
      </Header>
      <Text style={styles.usuarioNome}>Nome: {item.nome}</Text>
      <Text style={styles.usuarioCpf}>CPF: {item.cpf}</Text>
      <Text style={styles.usuarioEmail}>Email: {item.email}</Text>
      <Text style={styles.usuarioIdade}>Idade: {item.idade}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Usuários</Text>
      <FlatList
        data={usuarios}
        renderItem={renderUsuario}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Enviar" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  usuarioContainer: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 16,
    marginBottom: 8,
  },
  usuarioNome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  usuarioCpf: {
    fontSize: 16,
  },
  usuarioEmail: {
    fontSize: 16,
  },
  usuarioIdade: {
    fontSize: 16,
  },
});
