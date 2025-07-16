import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Card } from "react-native-paper";

import ResumenCard from "../components/ResumenCard";
import TransmisionCard from "../components/TransmisionCard"; //en caso que deba seguir tranmitiendo en vivo
import VideoCard from "../components/VideoCard"; //en caso que deba reproducir un video guardado

const Resumen = () => {
  const [descripcionDelBackendResumen, setDescripcionDelBackendResumen] = useState("");

  // Simulación de una llamada al backend para la parte Polocial
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('ENDPOINT_DEL_BACKEND');

        // Datos de ejemplo simulados del backend
        const data = {
          id: 1,
          titulo: "Proceso de Solicitud A",
          descripcionPolicial:
            "Resumen                                                                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          estado: "Activo",
        };

        setDescripcionDelBackendResumen(data.descripcionPolicial);
      } catch (error) {
        console.error("Error al obtener datos del backend:", error);
        setDescripcionDelBackendResumen("Error al cargar la descripción.");
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

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
            Video tomado en Gilberto gato Sobral y Gaspar de Carvajal
          </Text>
        </View>

    {/* Aquí coloqué dos opciones, ya que no sabía que debía ir, 
    si la transmisión en vivo o se reproducirá un video guardado de la transmisión. */}

        {/* Tarjeta de Transmisión */}

{/*        <TransmisionCard />     */}

        {/* Tarjeta de Video */}

        <VideoCard />

        {/*tarjeta de Resumen */}


        <View style={styles.titleSection}>
          <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />
          <Text style={styles.title}> Descripción</Text>
        </View>

        <Card style={styles.card}>
          <ResumenCard descripcion={descripcionDelBackendResumen} />
        </Card>
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
  card: {
    marginTop: 10,
    marginHorizontal: 10, // Utiliza marginHorizontal si quieres que se vea bien dentro del padding
  },
  titulo: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
});

export default Resumen;
