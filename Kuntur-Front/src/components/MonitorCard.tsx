import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { Card, Button } from "react-native-paper";

import React, { useState } from "react";

const MonitorCard = () => {

  // Inicialmente, mostramos la primera tarjeta (apagado)
  const [isCard1Active, setIsCard1Active] = useState(true);

  // Función para alternar entre las tarjetas
  const toggleCard = () => {
    setIsCard1Active(!isCard1Active); // Cambia el valor del estado

//Aquí debería prender el dron, y enviar la IP a la ventana (Transmision ->TransmisionCard)
//Aquí debería prender el dron, y enviar la IP a la ventana (Transmision ->TransmisionCard)
//Aquí debería prender el dron, y enviar la IP a la ventana (Transmision ->TransmisionCard)
//Aquí debería prender el dron, y enviar la IP a la ventana (Transmision ->TransmisionCard)


  };
  return (
    
    <View style={styles.mainContainer}> {/* Contenedor principal para centrar las cards */}
      {isCard1Active ? (
        // Card 1: Apagado
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.logo}>
              <Image source={require("../../assets/apagado.png")} />
            </View>
            <Text style={styles.text1}>Kuntur</Text>
            <Text style={styles.text1}>Apagado</Text>
            <View style={styles.buttonContainer}> {/* Usar buttonContainer para los botones */}
              <Button
                mode="contained"
                textColor="#CB4A4F"
                style={styles.button1}
                icon={"power"}
                onPress={toggleCard} // <-- Llama a la función para alternar
              >
                Activar
              </Button>
            </View>
          </Card.Content>
        </Card>
      ) : (
        // Card 2: Prendido
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.logo}>
              <Image source={require("../../assets/prendido.png")} />
            </View>
            <Text style={styles.text2}>Kuntur</Text>
            <Text style={styles.text2}>a la escucha</Text>
            <View style={styles.buttonContainer}> {/* Usar buttonContainer para los botones */}
              <Button
                mode="contained"
                textColor="#2FA45C"
                style={styles.button2}
                icon={"power"}
                onPress={toggleCard} // <-- Llama a la función para alternar
              >
                Apagar
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { // Nuevo contenedor para centrar las cards si es necesario
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    minHeight: 500, // Altura card
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: '90%', // Asegura que la tarjeta no ocupe todo el ancho si no es necesario
    maxWidth: 400, // Limita el ancho máximo para pantallas grandes
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    // opacity: 1, // Ya no es necesario si usas rgba en el fondo de la card
  },
  text1: {
    fontSize: 20,
    color: "#CB4A4F",
    textAlign: "center",
    marginTop: 10,
  },
  text2: {
    fontSize: 20,
    color: "#2FA45C",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: { // Renombrado de 'container' a 'buttonContainer' para mayor claridad
    alignItems: "center",
    padding: 5,
  },
  button1: {
    marginTop: 20,
    width: "50%",
    backgroundColor: "#EECFD0",
  },
  button2: {
    marginTop: 20,
    width: "50%",
    backgroundColor: "#C7E5D4",
  },
});

export default MonitorCard;

//#CB4A4F
//#EECFD0
