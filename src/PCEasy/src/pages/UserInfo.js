import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Perfil = ({ usuario }) => {

  const navigation = useNavigation();
  const handleUserUpdate = (navigation) => {
    navigation.navigate('UserUpdate', { userId: usuario.id });
  }

  // Verifique se o objeto usuario existe antes de acessar suas propriedades
  if (!usuario) {
    return (
      <View>
        <Text>Carregando informações do usuário...</Text>
        {/* Renderize uma mensagem de carregamento ou qualquer outra coisa enquanto as informações do usuário estão sendo carregadas */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Informações do Usuário</Text>
      <Text>ID:</Text><Text style={styles.input}> {usuario.id} </Text>
      <Text>Nome:</Text><Text style={styles.input}> {usuario.nome} </Text>
      <Text>CPF:</Text><Text style={styles.input}> {usuario.cpf} </Text>
      <Text>Senha:</Text><Text style={styles.input}> {usuario.senha} </Text>
      <Text>Endereço:</Text><Text style={styles.input}> {usuario.endereco} </Text>
      <Text>Idade:</Text><Text style={styles.input}> {usuario.idade} </Text>
      <Text>Data de Registro:</Text><Text style={styles.input}> {usuario.data_registro} </Text>
      <Button style={[styles.button, styles.buttonText]} title="Atualizar Informações" onPress={() => handleUserUpdate(navigation)} />
      {/* Renderize as informações do usuário aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "50%",
    height: 40,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    alignItems: "center",
    
  },

  button: {
    backgroundColor: "#4287f5",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  label: {
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default Perfil;
