import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import TransmisionCard from "../components/TransmisionCard";
import { Card, Button } from "react-native-paper";

const Transmision = () => {
  const navigation = useNavigation();
  const screenNext = async () => {
    navigation.navigate("Resumen");
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
        <View style={styles.logoSection}>
          <Image
            source={require("../../assets/encabezado1.png")}
            style={styles.logo}
          />
          <Image
            source={require("../../assets/encabezado2.png")}
            style={styles.logo2}
          />
          <Image
            source={require("../../assets/encabezado3.png")}
            style={styles.logo}
          />
        </View>
        {/* Título */}
        <View style={styles.titleSection}>
          <MaterialCommunityIcons name="map-marker" size={24} color="white" />
          <Text style={styles.title}>
            Gilberto gato Sobral y Gaspar de Carvajal
          </Text>
        </View>
        {/* Tarjeta de Transmisión */}
        //
        <TransmisionCard />
        {/* Botón para enviar la información al Enrichment del vídeo 
      además de enviar la información a UPC y de JusticIA,
      recibir el texto y agregarlo en él (Proceso ->ProcesoCard) Proceso parte policial y Sentencia*/}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={screenNext}
            buttonColor="#C7E5D4"
            textColor="#74409B"
            style={styles.button}
          >
            Enviar
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
  container: {
    flex: 1,
    padding: 16,
  },
  logoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logo2: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    width: "40%", // Mantén el ancho del botón
  },
});

export default Transmision;
