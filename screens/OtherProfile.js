import React from 'react'
import {Text} from 'react-native'

const OtherProfile=(props)=>{
    const {name}= props.route.params
    return(
        <Text>{name}</Text>
    )
}

export default OtherProfile