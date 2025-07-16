import { StyleSheet, Text, ScrollView, View } from "react-native";
import { WebView } from "react-native-webview";

import * as React from "react";

const TransmisionCard = () => {
  // URL para pruebas de la transmisión en vivo
  const mjpegUrl = "http://38.79.156.188/CgiStart/nphMotionJpeg?Resolution=640x480";
  //const mjpegUrl = 'http://pendelcam.kip.uni-heidelberg.de/mjpg/video.mjpg';
  //const mjpegUrl = 'http://webcam01.ecn.purdue.edu/mjpg/video.mjpg';
  // const mjpegUrl = 'http://61.211.241.239/nphMotionJpeg?Resolution=320x240&Quality=Standard';

  const html = `
    <html>
      <body style="margin:0;padding:0;overflow:hidden;">
        <img src="${mjpegUrl}" style="width:100%;height:auto;" />
      </body>
    </html>
  `;
  return (
    <View style={styles.container}>
      <WebView originWhitelist={["*"]} source={{ html }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5, 
    marginTop: 20, 
    width: "100%",
    height: 280, 
    alignSelf: 'center', 
  },
});

export default TransmisionCard;
