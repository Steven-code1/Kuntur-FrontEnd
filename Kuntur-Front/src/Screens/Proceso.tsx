import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";

import ProcesoCard from "../components/ProcesoCard";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Proceso = () => {
  const [descripcionDelBackendPoli, setDescripcionDelBackendPoli] = useState("");
  const [descripcionDelBackendSen, setDescripcionDelBackendSen] = useState("");




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
            "Parte Plicial                                                                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          estado: "Activo",
        };

        setDescripcionDelBackendPoli(data.descripcionPolicial);
      } catch (error) {
        console.error("Error al obtener datos del backend:", error);
        setDescripcionDelBackendPoli("Error al cargar la descripción.");
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente


  // Simulación de una llamada al backend para la parte de Sentencia
  useEffect(() => {
    const fetchData = async () => {
      try {

        // const response = await fetch('ENDPOINT_DEL_BACKEND');

        // Datos de ejemplo simulados del backend
        const data = {
          id: 1,
          titulo: "Proceso de Solicitud A",
          descripcionSentencia:
            "Sentencia                                                                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          estado: "Activo",
        };

        setDescripcionDelBackendSen(data.descripcionSentencia);
      } catch (error) {
        console.error("Error al obtener datos del backend:", error);
        setDescripcionDelBackendSen("Error al cargar la descripción.");
      }
    };

    fetchData();
  }, []);






  
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
        <MaterialCommunityIcons name="police-badge" size={24} color="white" />
        <Text style={styles.title}> Parte Policial</Text>
      </View>

      <Card style={styles.card}>
        <View>
          <View style={styles.titulo}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Descripción
            </Text>
          </View>
        </View>
        <ProcesoCard descripcion={descripcionDelBackendPoli} />
      </Card>

      <View style={styles.titleSection}>
        <MaterialCommunityIcons
          name="file-document-multiple"
          size={24}
          color="white"
        />
        <Text style={styles.title}> Sentencia</Text>
      </View>

      <Card style={styles.card}>
        <View>
          <View style={styles.titulo}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Descripción
            </Text>
          </View>
        </View>
        <ProcesoCard descripcion={descripcionDelBackendSen} />
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
    marginBottom: 0,
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

export default Proceso;