import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React, { useState } from "react";
import {View, StyleSheet,Animated,Easing,children, Text,Image, index, TouchableOpacity,ImageBackground, Modal, Button} from "react-native";


export default function Carouselbg({ navigation, children }) {
  
    return (
        <View>
          
    
          <ImageBackground
             style={styles.frame}
             source={require("../../assets/loading1/frame2.png")}
            >
             

            <ImageBackground 
             style={styles.image}
             source={require("../../assets/loading1/background1.png")}>
  
             <View style={{flexDirection:'row', padding:'1%', marginTop:'2%'}}>
                <Image 
                  style={style.callback}
                  source={require("../../assets/Main/backbutton.png")}/>

                  <View style={{flexDirection:'row', alignSelf:'center', marginLeft:'25%'}}>
                  <Image 
                     style={style.moneyframe}
                     source={require("../../assets/Main/moneyframe.png")}/>
                     <View style={{flexDirection:'column'}}>
                  <Image 
                      style={style.moneybox}
                      source={require("../../assets/Main/moneybox.png")}/>
               
                    <Text style={{color:'#fff',fontSize:8,fontWeight:'500', textAlign:'center'}}>WALLET</Text>
                    </View>

                  <TouchableOpacity >
                  <Image 
                     style={style.plus}
                     source={require("../../assets/Main/plus.png")}/>
                  </TouchableOpacity>
                  </View>

                  
                  <View style={{flexDirection:'column', alignSelf:'flex-start',position:'absolute', marginLeft:'90%', marginRight:'1%'}}>
                    <TouchableOpacity>
                     <Image 
                        style={style.profile}
                        source={require("../../assets/Main/profile.png")}/>
                  </TouchableOpacity>
                      <Text style={{color:'#fff',fontSize:8,fontWeight:'500', textAlign:'center'}}>PROFILE</Text>
                      </View>

                  </View>
            
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
    profile:{
        alignSelf:'flex-end',
        marginRight:'-85%'
    }
    

      })