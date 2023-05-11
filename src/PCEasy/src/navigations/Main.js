import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import UserRegister from "../pages/UserRegister";
import Login from "../pages/Login";
import SplashScreen from "../pages/SplashScreen";
import PointRegister from "../pages/PointRegister";
import UserInfo from "../pages/UserInfo";
import UserUpdate from "../pages/UserUpdate";
import { Times } from "../pages/Times";

// Restante do código

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="PointRegister"
        component={PointRegister}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="UserRegister"
        component={UserRegister}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="UserUpdate"
        component={UserUpdate}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Times"
        component={Times}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
