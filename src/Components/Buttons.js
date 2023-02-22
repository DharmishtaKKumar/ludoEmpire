import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export default function Buttons({ navigation, children }) {
  return (
    <LinearGradient
      colors={["#E1A221","#CD791F"]}
      style={style.buttons}
    >
      {children}
    </LinearGradient>
  );
}

const style = StyleSheet.create({
    buttons: {
        width:180,
        height:40,
        alignItems: "center", 
        justifyContent:'center',
        alignSelf:'center',
        marginTop:"15%",
        borderRadius:20

  },
});