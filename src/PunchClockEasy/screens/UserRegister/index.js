import React, { useState } from "react";
import { Alert } from "react-native";
import { Container, Title, Input, Button, ButtonText } from "./styles";
import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({
  name: "userRegisters",
});

export const UserRegister = () => {
  return <></>;
};
