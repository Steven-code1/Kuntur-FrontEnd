import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importa tus pantallas de la aplicación
import Monitor from "./Screens/Monitor";
import Transmision from "./Screens/Transmision";
import Resumen from "./Screens/Resumen";
import Proceso from "./Screens/Proceso";
import Mapa from "./Screens/Mapa";


// Importa la nueva pantalla de Login
import LoginScreen from "./Screens/Login"; 
import BienvenidoLogin from "./Screens/BienvenidoLogin";

// Creamos un Tab Navigator para las pestañas de la aplicación principal
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Monitor"
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="Monitor"
        component={Monitor}
        options={{
          headerShown: false,
          tabBarLabel: "Monitor",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="eye" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transmision"
        component={Transmision}
        options={{
          headerShown: false,
          tabBarLabel: "Transmisión",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wifi" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Resumen"
        component={Resumen}
        options={{
          headerShown: false,
          tabBarLabel: "Resumen",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Proceso"
        component={Proceso}
        options={{
          headerShown: false,
          tabBarLabel: "Proceso",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          headerShown: false,
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Creamos un Stack Navigator para la navegación principal, incluyendo el login
const Stack = createNativeStackNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* La pantalla de Login es la primera en el Stack */}
        <Stack.Screen name="BienvenidoLogin" component={BienvenidoLogin} />

        <Stack.Screen name="Login" component={LoginScreen} />

        {/* las pestañas se mostrarán después del login exitoso */}
        <Stack.Screen name="MainTabs" component={MyTabs} />

        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="Tranmision" component={Transmision} />
        {/*<Stack.Screen name="Resumen" component={Transmision} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
