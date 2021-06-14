import React from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native'
import Navigation from '../navigation/Navigation'


const EventClickable=(props)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={()=>{props.navigator.navigate("OtherProfile",{name:props.name})}}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )


}

const styles= StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      }
})

export default EventClickable;