
import { StyleSheet, Text, ScrollView} from 'react-native';
import { Card } from "react-native-paper";
import * as React from 'react';


const ResumenCard = ({ descripcion }) => {

    return (
        <Card>
            <Card.Content>
                <ScrollView style={styles.descriptionScrollView}>
                    <Text>
                        {descripcion}
                    </Text>
                </ScrollView>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    descriptionScrollView: {
        maxHeight: 200, // Ajusta esta altura según lo que consideres adecuado para tu Card
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

});

export default ResumenCard;