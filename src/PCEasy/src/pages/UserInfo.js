import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getUserById } from "../services/GastosServicesDB";

const Perfil = ({ usuario }) => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [idade, setIdade] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const handleUserUpdate = (navigation) => {
    if(!usuario)
      navigation.navigate('UserUpdate', { userId: id});
    else
      navigation.navigate('UserUpdate', { userId: usuario.id}); 
  }

  useEffect(() => {
    teste(route);


    function teste(route) {
      const { test } = route.params == null || route.params == undefined ? 0 : route.params;
      setId(test);
      if (test !== undefined) {
        const fetchUserData = async () => {
          const userData = await getUserById(test);
          setNome(userData.nome);
          setCpf(userData.cpf);
          setSenha(userData.senha);
          setEmail(userData.email);
          setEndereco(userData.endereco);
          setDataRegistro(userData.data_registro);
          setIdade(userData.idade);
        };
        fetchUserData();
      }
    }

  },[]);
    

  return (    
  <View>
    {!usuario ? 
    <View style={styles.container}>
    <Text style={styles.label}>Informações do Usuário</Text>
    <Text>ID:</Text><Text style={styles.input}> {id} </Text>
    <Text>Nome:</Text><Text style={styles.input}> {nome} </Text>
    <Text>CPF:</Text><Text style={styles.input}> {cpf} </Text>
    <Text>Senha:</Text><Text style={styles.input}> {senha} </Text>
    <Text>Endereço:</Text><Text style={styles.input}> {endereco} </Text>
    <Text>Idade:</Text><Text style={styles.input}> {idade} </Text>
    <Text>{dataRegistro}</Text>
    <Button style={[styles.button, styles.buttonText]} title="Atualizar Informações" onPress={() => handleUserUpdate(navigation)} />
    {/* Renderize as informações do usuário aqui */}
    </View>
    :
    <View style={styles.container}>
    <Text style={styles.label}>Informações do Usuário</Text>
    <Text>ID:</Text><Text style={styles.input}> { usuario.id} </Text>
    <Text>Nome:</Text><Text style={styles.input}> {usuario.nome} </Text>
    <Text>CPF:</Text><Text style={styles.input}> { usuario.cpf} </Text>
    <Text>Senha:</Text><Text style={styles.input}> {usuario.senha} </Text>
    <Text>Endereço:</Text><Text style={styles.input}> {usuario.endereco} </Text>
    <Text>Idade:</Text><Text style={styles.input}> {usuario.idade} </Text>
    <Text>Data de Registro:</Text><Text style={styles.input}> {usuario.data_registro} </Text>
    <Button style={[styles.button, styles.buttonText]} title="Atualizar Informações" onPress={() => handleUserUpdate(navigation)} />
    {/* Renderize as informações do usuário aqui */}
  </View>}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
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
