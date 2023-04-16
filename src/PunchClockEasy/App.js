import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./screens/Login";
import { SplashScreen } from "./screens/SplashScreens";
import { Home } from "./screens/Home";
import { Routes } from "./routes";

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
