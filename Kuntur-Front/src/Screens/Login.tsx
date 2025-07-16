import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // degradado del fondo
import { Button } from "react-native-paper";

// La contraseña es admin y la clave es 123

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      // Si la autenticación es exitosa, navega a las pestañas principales
      navigation.replace("MainTabs"); // Usa replace para que el usuario no pueda volver al login con el botón de atrás
    } else {
      Alert.alert("Error de Login", "Usuario o contraseña incorrectos.");
    }
  };

  return (
    <LinearGradient
      colors={["#74409B", "#384c81"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.fullScreenContainer} // <-- Nuevo estilo para el LinearGradient
    >
      {/* Envuelve el contenido que puede desbordarse en un ScrollView */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        {/* Logos */}
        <View style={styles.logo}>
          <Image source={require("../../assets/LogoWhite.png")} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            buttonColor="#C7E5D4"
            textColor="#74409B"
            style={styles.button}
          >
            Ingresar
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    // estilo para que el gradiente ocupe toda la pantalla
    flex: 1,
  },
  scrollView: {
    flex: 1, // Permite que el ScrollView ocupe el espacio disponible
    padding: 16, // Aplica el padding aquí en el ScrollView
  },
  scrollViewContent: {
    flexGrow: 1, // Permite que el contenido crezca y empuje el ScrollView
    paddingBottom: 30, // Añade un poco de padding al final si es necesario
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  container: {
    flex: 3,
    //justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#74409B",
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: "100%",
    //alignItems: "center",
    //justifyContent: "center",
  },
  button: {
    marginTop: 10,
    width: "50%",
  },
});

export default Login;
