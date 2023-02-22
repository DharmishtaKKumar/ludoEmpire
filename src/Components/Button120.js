import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export default function Button120({ navigation, children }) {
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
        width:120,
        height:28,
        alignItems: "center", 
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:"5%",
        borderRadius:20

  },
});