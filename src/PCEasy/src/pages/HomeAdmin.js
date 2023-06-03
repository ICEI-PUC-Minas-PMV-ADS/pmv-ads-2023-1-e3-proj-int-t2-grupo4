import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import PesquisaUsuario from "./PesquisaUsuario";
import UserRegister from "./UserRegister";

const HomeAdmin = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "pesquisaUsuario", title: "Pesquisar Usuário", icon: "search" },
    { key: "userRegister", title: "Registrar Usuário", icon: "person" }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pesquisaUsuario: PesquisaUsuario,
    userRegister: UserRegister
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#004AAD" }}
      activeColor="#000000"
      inactiveColor="#A0A0A0"
      renderIcon={({ route, color }) => (
        <Icon name={route.icon} color={color} size={24} />
      )}
    />
  );
};

export default HomeAdmin;
