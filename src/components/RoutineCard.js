import React from 'react'
import {View, TouchableOpacity, Text,StyleSheet} from "react-native";

export default function RoutineCard({text}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2,
        borderRadius:10,
        borderColor:'black',

        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal:5,
        paddingVertical:5,

    },
    text:{
        marginHorizontal:"auto",
        marginVertical:5,
        fontSize:24,

    }
})

