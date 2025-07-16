import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import TransmisionCard from "../components/TransmisionCard";
import { Card, Button } from "react-native-paper";

const Transmision = () => {
  const navigation = useNavigation();
  const screenNext = async () => {
    navigation.navigate("Mapa");
  };

  return (
    <LinearGradient
      colors={["#74409B", "#384c81"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
    width: 150,
    height: 150,
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
    //marginTop: -100,
  },
  button: {
    width: "40%", // Mantén el ancho del botón
  },
});

export default Transmision;
