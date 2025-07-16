import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";

import MapaCard from "../components/MapaCard";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Mapa = () => {
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

      <View style={styles.titleSection}>
        <MaterialCommunityIcons name="map-marker" size={24} color="white" />
        <Text style={styles.title}>  Puntos de acceso Kuntur</Text>
      </View>

      <MapaCard/>

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
    //top: 10,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logo2: {
    //top: 10,
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    marginTop: 12,
    margin: 10,
  },

  titulo: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
});

export default Mapa;
