import React, { useState } from "react";
import {View, StyleSheet,Animated,Easing,children, Text,Image, index, TouchableOpacity,ImageBackground, Modal, Button} from "react-native";


export default function Background({ navigation, children }) {
  
    return (
        <View>
          
    
          <ImageBackground
             style={styles.frame}
             source={require("../../assets/loading1/frame2.png")}
            >
             

            <ImageBackground 
             style={styles.image}
             source={require("../../assets/loading1/background1.png")}>
            
                {children}
                </ImageBackground>
                </ImageBackground>

        
                </View>
    );

}

const styles=StyleSheet.create({
  frame:{
    height:"100%",
    width:"100%"
},
    image:{
        height:"100%",
        width:"100%"
    },
    Logo2:{
      alignSelf:'center',
       marginTop: "-30.63%",
       height:103,
       width:130
    },
    

      })