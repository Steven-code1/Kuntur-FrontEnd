import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Card } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import * as React from "react";

const ProcesoCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>Mapa</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -0.197658,
            longitude: -78.502260,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {/* Ubicaciones quemadas en el mapa */}
          <Marker
            coordinate={{ latitude: -0.197658, longitude: -78.502260 }}
            title="Kuntur 1"
            description="Gilberto gato Sobral y Gaspar de carvajal"
          />
          <Marker
            coordinate={{ latitude: -0.188977, longitude: -78.482665 }}
            title="Kuntur 2"
            description="Avenida Eloy Alfaro y Avenida de los Shyris"
          />
          <Marker
            coordinate={{ latitude: -0.249150, longitude: -78.536433 }}
            title="Kuntur 3"
            description="Avenida Mariscal Sucre y Calle Alonso de Angulo"
          />
          <Marker
            coordinate={{ latitude: -0.092021, longitude: -78.433152 }}
            title="Kuntur 4"
            description="Capitán Giovanni Calles y La Independencia"
          />
          <Marker
            coordinate={{ latitude: -0.122687, longitude: -78.466607 }}
            title="Kuntur 5"
            description="Av Jorge Garces y Baltazar Carrión"
          />
          <Marker
            coordinate={{ latitude: -0.200146, longitude: -78.490925 }}
            title="Kuntur 6"
            description="Avenida Colón y Avenida Río Amazonas"
          />
          <Marker
            coordinate={{ latitude: -0.128836, longitude: -78.486276 }}
            title="Kuntur 7"
            description="Av. Luis G. Tufiño y Frrancisco Marcos"
          />
          <Marker
            coordinate={{ latitude: -0.151681, longitude: -78.477180 }}
            title="Kuntur 8"
            description="El Morlán y Samuel Fritz"
          />
          <Marker
            coordinate={{ latitude: -0.223837, longitude: -78.517496 }}
            title="Kuntur 9"
            description="Bahia de Caráquez y Ambato"
          />
          <Marker
            coordinate={{ latitude: -0.207427, longitude: -78.482016 }}
            title="Kuntur 10"
            description="Avenida Coruña y Francisco Salazar"
          />
        </MapView>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 400,// Altura card
    margin: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  map: {
    //flex: 1,
    width: "100%",
    height: 500, // Altura del mapa
    borderRadius: 10,
  },
});

export default ProcesoCard;
