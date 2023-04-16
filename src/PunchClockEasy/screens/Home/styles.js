import styled from "styled-components/native";
import { Appbar } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border-bottom-color: #000;
`;

export const ImageWrapper = styled.View`
  border-radius: 200px;
  border-width: 5px;
  border-color: white;
  padding: 5px;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
  resize-mode: contain;
`;

export const AppbarHeader = styled(Appbar.Header)`
  background-color: #004aad;
`;

export const HoraAtual = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: 10px;
`;
