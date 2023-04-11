import React, { useState } from "react";
import { Menu, Appbar, Provider as PaperProvider } from "react-native-paper";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fingerprint from "../../assets/registro.png";
import {
  Container,
  Content,
  ImageWrapper,
  AppbarHeader,
  Logo,
  HoraAtual,
} from "./styles";

export const Home = () => {
  const [horaAtual, setHoraAtual] = React.useState(
    new Date().toLocaleTimeString()
  );

  const currentTime = new Date().toLocaleTimeString();

  const registroPonto = () => {
    console.log(`Registro realizado! ${currentTime}`);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [visible, setVisible] = useState(false);
  const _openMenu = () => setVisible(true);
  const _closeMenu = () => setVisible(false);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* conteúdo do seu aplicativo */}
        <Container>
          <AppbarHeader>
            <Appbar.Content title="Registro de Ponto" color="white" />
            <Menu
              visible={visible}
              onDismiss={_closeMenu}
              anchor={
                <Appbar.Action
                  icon="dots-vertical"
                  color="white"
                  onPress={_openMenu}
                />
              }
            >
              <Menu.Item onPress={() => {}} title="Perfil" />
              <Menu.Item onPress={() => {}} title="Espelho de ponto" />
              <Menu.Item onPress={() => {}} title="Sair" />
            </Menu>
          </AppbarHeader>
          <Content>
            <TouchableOpacity onPress={registroPonto}>
              <ImageWrapper>
                <Logo source={fingerprint} />
              </ImageWrapper>
            </TouchableOpacity>
            <HoraAtual>{horaAtual}</HoraAtual>
          </Content>
        </Container>
      </PaperProvider>
    </SafeAreaProvider>
  );
};
