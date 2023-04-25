import React from "react";
import { StyleSheet, Text, View } from 'react-native'


const InfoCard = (props) => {

    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, {color: '#adadad'}]}>{props.variable}</Text>
        </View>
    )
}
const styles = StyleSheet.create({   
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        minWidth: '40%',
      },
    text:{
        color: '#e0e0e0',
        margin: 5,
        marginLeft: 10,
        fontSize: 18,
      },
  });


export default InfoCard;