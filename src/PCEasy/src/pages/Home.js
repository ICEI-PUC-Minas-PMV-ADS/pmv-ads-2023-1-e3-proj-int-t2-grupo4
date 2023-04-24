import React, { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";

import Calculadora from "./Calculadora";
import Perfil from "./UserInfo";
import Login from "./Login";
import PointRegister from "./PointRegister";

const Home = ({ route }) => {
  // Adicione a propriedade "route" como parâmetro
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "pointregister", title: "PointRegister", icon: "fingerprint" },
    { key: "perfil", title: "Perfil", icon: "account-circle" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pointregister: PointRegister,
    perfil: () => <Perfil usuario={route.params.usuario} />, // Passe as informações do usuário para a página Perfil
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#004AAD" }}
      activeColor="#000000" // Defina a cor do ícone ativo aqui
      inactiveColor="#A0A0A0" // Defina a cor do ícone inativo aqui // Defina a cor desejada para a barra de navegação
    />
  );
};

export default Home;
