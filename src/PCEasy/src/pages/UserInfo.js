import React from "react";
import { View, Text } from "react-native";

const Perfil = ({ usuario }) => {
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
    <View>
      <Text>Informações do Usuário</Text>
      <Text>Nome: {usuario.nome}</Text>
      <Text>Email: {usuario.email}</Text>
      {/* Renderize as informações do usuário aqui */}
    </View>
  );
};

export default Perfil;
