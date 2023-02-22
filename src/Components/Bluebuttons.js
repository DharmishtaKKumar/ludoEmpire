import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export default function Bluebuttons({ navigation, children }) {
  return (
    <LinearGradient
      colors={["#03548D","#0038C8"]}
      style={style.buttons}
    >
      {children}
    </LinearGradient>
  );
}

const style = StyleSheet.create({
    buttons: {
        width:289,
        height:306,
        alignItems: "center", 
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:10,
        borderColor:"#00C4FF",
        borderWidth:1.5


  },
});