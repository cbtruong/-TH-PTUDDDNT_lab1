import { StyleSheet, Text, TextInput, View } from "react-native";
import HelloWorld from "./src/HelloWorld/HelloWorld";
import Phan1_2 from "./src/Phan1_2/Phan1_2";
import Phan1_3 from "./src/Phan1_3/Phan1_3";
import State_Prop from "./src/State_Prop/State_Prop";
import Scrollable from "./src/Scrollable/Scrollable";
import Bulding_A_Form from "./src/Bulding_A_Form/Bulding_A_Form";
import LongList from "./src/LongList/LongList";
import Calculator from "./src/Styling/Calculator";

import { useState } from "react";

export default function App() {
  const [exercise,setExercise]=useState(0);
	return (
		<View style={{flex:1,backgroundColor:'#3a6489'}} >
      <View>
        <TextInput type="number"  value={exercise} onChange={(e)=>setExercise(Number(e.target.value))}/>
      </View>
        {exercise === 0 && <HelloWorld />}
        {exercise === 1 && <Phan1_2/>}
        {exercise === 2 && <Phan1_3/>}
        {exercise === 3 && <State_Prop/>}
        {exercise === 5 && <Scrollable/>}
        {exercise === 6 && <Bulding_A_Form/>}
        {exercise === 7 && <LongList/>}
        {exercise === 8 && <Calculator/>}
        {(exercise <0 || exercise>5) ? <Text>Chỉ nhập giá trị từ 0-8</Text> :""}
		</View>
	);
}
