import React from 'react'
import { Button, StyleSheet, TouchableOpacity, View,Text } from 'react-native'

const Phan1_2 = () => {
  return (
    <View style={styles.container}>
        <Button title='Button' onPress={()=>alert("hello!")}/>
        <TouchableOpacity onPress={()=>alert("hello Touch!")}>
            <Text>Button 2</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles= StyleSheet.create({

})
export default Phan1_2