import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";

import MonitorCard from "../components/MonitorCard";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Monitor = () => {
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

        <View style={styles.titleSection}>
          <MaterialCommunityIcons name="map-marker" size={24} color="white" />
          <Text style={styles.title}>
            {" "}
            Gilberto gato Sobral y Gaspar de Carvajal
          </Text>
        </View>

        <MonitorCard />
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
    //top: 10,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logo2: {
    //top: 10,
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    //marginTop: 5,
    //margin: 10,
  },

  titulo: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
});

export default Monitor;
