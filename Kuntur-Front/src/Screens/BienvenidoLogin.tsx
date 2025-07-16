import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // degradado del fondo
import { Button, Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// La contraseña es admin y la clave es 123

const BienvenidoLogin = () => {
  const navigation = useNavigation();
  const screenNext = async () => {
    navigation.navigate("Login");
  };

  return (
    <LinearGradient
      colors={["#74409B", "#384c81"]} // colores del degradado
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }} // dirección de izquierda a derecha
      style={styles.frameParent}
    >
      <View style={styles.logo}>
        <Image source={require("../../assets/LogoWhite.png")} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Button
          mode="contained"
          onPress={screenNext}
          buttonColor="#fff"
          textColor="#74409B"
          style={styles.button}
        >
          Iniciar Sesión
        </Button>

        <Button
          mode="contained"
          buttonColor="#fff"
          textColor="#74409B"
          style={styles.button}
        >
          Registrarse
        </Button>
      </View>

      <View style={styles.ingresos}>
        <Text style={styles.title2}>Ingresa usando</Text>
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="github" size={30} color="#c8bebd" style={styles.iconSpacing} />
  <MaterialCommunityIcons name="google" size={30} color="#c8bebd" style={styles.iconSpacing} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  container: {
    //justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  ingresos: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  title2: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#c8bebd",
  },
  frameParent: {
    width: "100%",
    height: "100%",
    //alignItems: "center",
    //justifyContent: "center",
  },
  button: {
    marginTop: 20,
    width: "50%",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSpacing: {
    marginHorizontal: 10, // Ajusta este valor para más o menos espacio
  },
});

export default BienvenidoLogin;
