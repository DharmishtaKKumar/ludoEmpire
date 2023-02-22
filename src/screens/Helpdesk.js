import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity } from "react-native";
import { Component } from "react/cjs/react.development";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../Components/Background";

export default class Helpdesk extends Component {

    settings=() => {
        this.props.navigation.navigate('Settings')
    }
    render() {
        return(
           <Background>
              <TouchableOpacity on onPress={this.settings}>
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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginLeft:"18%",marginTop:'2%', marginRight:"43%"}}>HELPDESK</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>
                        
                        <TouchableOpacity>

                        <LinearGradient
                           colors={["#E1A221","#CD791F"]}
                           style={style.email}
                         >
                            <Image 
                            style={{ marginLeft:"2%", marginRight:"65%", marginTop:"-1%"}}
                            source={require("../../assets/Main/email.png")}/>
                            
                            <Text style={{color:"#fff", fontWeight:'600',marginTop:"-13%", marginLeft:"-1%", marginRight:"5%" }}>EMAIL</Text>

                        </LinearGradient>
                        </TouchableOpacity>
 
                      </LinearGradient>
           </Background>
        );
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
        marginTop:"5%"
     },
     heading:{
        height:"41%",
        width:"73.9%",
        alignSelf:'center',
        marginLeft:"-11%",
        marginTop:"5%"
       
     },
     contentbox:{
        height:"22%",
        width:"80%",
        marginTop:"-31%",
        alignSelf:'center',
        borderRadius:10,
        borderWidth:0.8,
        borderColor:"#00C4FF"
     },
     email: {
        width:"50%",
        height:"38%",
        alignItems: "center", 
        justifyContent:'center',
        alignSelf:'center',
        marginTop:"15%",
        borderRadius:8

  },
})