import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity, Button } from "react-native";
import { Component } from "react/cjs/react.development";
import Background from "../Components/Background";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import Buttons from "../Components/Buttons";


export default class Entername extends Component {
 

    profile= () => {
        this.props.navigation.navigate('Profile')
      }
    
    render() {
        return(
            <Background>
                 <TouchableOpacity on onPress={this.profile}> 
                    <Image 
                    style={style.close}
                    source={require("../../assets/Main/close.png")}/>
                </TouchableOpacity>
                <ImageBackground
                    style={style.topbuttondesign}
                    source={require("../../assets/Main/topbuttondesign.png")}>
                <ImageBackground
                    style={style.heading}
                    source={require("../../assets/Main/yellowheading.png")}>
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginLeft:"13%",marginTop:'2%', marginRight:"38%"}}>ENTER NAME</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>

                        <View style={style.namebox}>
                            <TextInput 
                            style={{color:"#fff"}}
                            //  autoCorrect={false}
                            //  onFocus={() => {
                            //    onFocus();
                            //    setIsFocused(true);
                            //  }}
                             ></TextInput>

                        </View>
                       
                       <TouchableOpacity >
                        <Buttons  >
                            <Text style={{fontWeight:'600', fontSize:13, color:'#fff'}}>OKAY</Text>
                        </Buttons>
                        </TouchableOpacity>
                       
                        </LinearGradient>
                </Background>
        )
    }
}

const style=StyleSheet.create({

    close:{
        marginLeft:"90%",
        marginTop:"5%"
     },
     topbuttondesign:{
        alignSelf:'center',
        marginLeft:"20%",
        height:"25%",
        width:"70%",
        marginTop:"20%"
     },
     heading:{
        height:"41%",
        width:"73.9%",
        alignSelf:'center',
        marginLeft:"-11%",
        marginTop:"5%"
       
     },
     contentbox:{
        height:"35%",
        width:"80%",
        marginTop:"-31%",
        alignSelf:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:"#00C4FF"
     },
     namebox:{
        height:"15%",
        width:"60%",
        backgroundColor:"#090C5B",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#00C4FF",
        alignSelf:'center', 
        marginTop:"20%"
     }
})