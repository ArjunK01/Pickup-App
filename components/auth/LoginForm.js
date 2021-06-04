import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import Login from '../../screens/Login'

const LoginForm = ({navigation})=>{
    return(
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
            <Button title="Submit"/>
            <Button title="Don't have an account? Create here"/>
        </View>    

    )

}

export default LoginForm