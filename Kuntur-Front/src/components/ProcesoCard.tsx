
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {Card, Chip, Icon, Button} from "react-native-paper";
import {useState} from "react";
import * as React from 'react';
import {useNavigation} from "@react-navigation/native";

const ProcesoCard = ({ descripcion }) => {

    const [expanded, setExpanded] = useState(false);
    const navigation = useNavigation();


    const handlePress = () => {
        setExpanded(!expanded);
    };

    return (
          <Card>
    <Card.Content>
      <ScrollView style={styles.scrollViewContent}>
        <Text >
          {descripcion}
        </Text>
      </ScrollView>
    </Card.Content>
  </Card>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    maxHeight: 200, // Establece un maxHeight para hacer visible el ScrollView. Ajusta según sea necesario.

  },
});

export default ProcesoCard;