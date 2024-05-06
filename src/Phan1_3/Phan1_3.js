import React from 'react'
import {StyleSheet, TouchableOpacity, View,Text } from 'react-native'


const Button =(props)=>(
    <TouchableOpacity onPress={props.onPress}
    style={{backgroundColor:'ff637c',padding:10,margin:10,...props.buttonStyle}}>
        <Text style={{color:'black'}}>
            {props.text}
        </Text>
    </TouchableOpacity>
)
const Phan1_3 = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
        <Button text="Say hello" onPress={()=>alert("hello")}/>
        <Button text="Say goodbye" buttonStyle={{backgroundColor:'#adc2c2'}} onPress={()=>alert("GoodBye")}/>
    </View>
  )
}

export default Phan1_3