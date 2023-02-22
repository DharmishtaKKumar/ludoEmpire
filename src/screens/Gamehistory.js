import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity, Button } from "react-native";
import { Component } from "react/cjs/react.development";
import Background from "../Components/Background";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";



export default class Gamehistory extends Component {
 

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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginTop:'2%', marginLeft:"8%", marginRight:"37%"}}>GAME HISTORY</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>
                    
                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.smallbox}>
                        
                       
                        <Text style={{color:"#DF9D21", fontWeight:'600', fontSize:11, marginLeft:'7%', marginTop:'1%', marginRight:'83%'}}> GAME CODE</Text>

                        <Text style={{color:"#DF9D21", fontWeight:'600', fontSize:11, marginLeft:'28%', marginTop:'-8%', marginRight:'55%'}}> MATCH AMOUNT</Text>

                        <Text style={{color:"#DF9D21", fontWeight:'600', fontSize:11, marginLeft:'50%', marginTop:'-8.2%', marginRight:'30%', textAlign:'center'}}> DATE AND TIME</Text>

                        <Text style={{color:"#DF9D21", fontWeight:'600', fontSize:11, marginLeft:'75%', marginTop:'-8%', marginRight:'8%', textAlign:'center'}}> WIN/LOSS AMOUNT</Text>
                 

                        </LinearGradient>
                    
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
        height:"75%",
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
     },
     yellowline1:{
        height:"2%",
        width:"90%", 
        alignSelf:"center", 
        marginTop:"22%"
     
     },
     inputnumber:{
        height:"15%",
        width:"80%",
        backgroundColor:"#090C5B",
        borderRadius:5, 
        borderWidth:1,
        borderColor:'#00C4FF', 
        marginTop:"10%",
        marginLeft:"-5%"
  
     },
     buttons:{
        width:180,
        height:40,
        alignItems: "center", 
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:"15%",
        borderRadius:20
     },
     smallbox:{
        height:'12%',
        borderRadius:6
     }
})