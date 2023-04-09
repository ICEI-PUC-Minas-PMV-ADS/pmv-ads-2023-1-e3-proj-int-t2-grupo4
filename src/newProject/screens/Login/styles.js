import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #fff;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  border-width: 1px;
  border-color: #ccc;
  padding-horizontal: 16px;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 48px;
  border-radius: 24px;
  background-color: #004aad;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
