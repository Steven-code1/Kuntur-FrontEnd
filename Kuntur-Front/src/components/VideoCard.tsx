import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function VideoCard() {
  const videoSource = require('../../assets/VideoPrueba.mp4'); // O una URL remota: { uri: 'https://example.com/your-video.mp4' }

  return (
    <View style={styles.card}>
      <Video
        source={videoSource}
        style={styles.video}
        useNativeControls 
        resizeMode={ResizeMode.CONTAIN}
        isLooping 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    overflow: 'hidden', // Asegura que el contenido se mantenga dentro de los bordes redondeados
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  video: {
    width: '100%',
    height: 200, // Ajusta la altura según sea necesario
    backgroundColor: '#000', // Color de fondo mientras el video carga
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});