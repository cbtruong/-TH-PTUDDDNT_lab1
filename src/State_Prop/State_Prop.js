import React, { useState } from 'react'
import {StyleSheet, TouchableOpacity, View,Text,Button } from 'react-native'


const State_Prop = () => {
  const [count,setCount]=useState(0);
  return (
    <View style={{flex:1,justifyContent:'center'}}>
    <Text>You'e press the button: {count} </Text>
    <Button title={`Pressed ${count} time(s)`} onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default State_Prop