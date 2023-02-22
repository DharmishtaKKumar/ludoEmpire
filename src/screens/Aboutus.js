import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity } from "react-native";
import { Component } from "react/cjs/react.development";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../Components/Background";
import Hyperlink from "react-native-hyperlink";

export default class Aboutus extends Component {

    settings= () => {
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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginLeft:"18%",marginTop:'2%', marginRight:"43%"}}>ABOUT US</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>

                       <Image 
                       style={{alignSelf:'center'}}
                       source={require("../../assets/Main/bluetopframe.png")}/>
                        
                       <Image 
                       style={style.fabzen}
                       source={require("../../assets/loading1/fabzen.png")}/>
                    
                    <Text style={{color:"#fff", fontSize:32, alignSelf:'center', fontWeight:'800'}}> FABZEN</Text>
                    <Text style={{color:"#fff", fontSize:16, alignSelf:'center'}}> T E C H N O L O G I E S</Text>

                    <Image 
                      style={style.yellowline}
                      source={require("../../assets/Main/yellowline.png")}/>

                      <Text style={{color:'#fff',textAlign:'justify', fontSize:10,marginLeft:"8%",marginTop:"5%", marginRight:"8%", fontWeight:'500', letterSpacing:0.001}}> Fabzen, one of the intergral players in India's real money gaming landscape, we bring games with great ideas and make sure they are easily available for anyone who loves games by offering them a fabulous gaming experience.</Text>
                      <Text style={{color:'#fff',textAlign:'justify', fontSize:10,marginTop:"5%",marginLeft:"8%", marginRight:"8%", fontWeight:'500', letterSpacing:0.001}}> Ludo Empire is India's favourite real money ludo game trusted by over 53 lakh users. Fabzen, equipped with fururistic tools and excellent know-how about the recent trends & shifts, we are on a mission to change real money games across the world. </Text>
                      <Text style={{color:'#fff',textAlign:'justify', fontSize:10,marginTop:"5%",marginLeft:"8%", marginRight:"8%", fontWeight:'500', letterSpacing:0.001}}> Visit our website for more about our games! </Text>
                       
                      <View>
                      <Hyperlink linkDefault={ true }>
                      <Text style={ { fontSize: 10 , color:'#fff', fontWeight:'500', textAlign:'center', marginTop:"7%"} }>
                      https://fabzentech.com/
                      </Text>
                     </Hyperlink>
                      <Image 
                      style={{alignSelf:'center'}}
                      source={require("../../assets/Main/blueunderline.png")}/>
                      </View>

                        
                      <View>
                      <Hyperlink linkDefault={ true }>
                      <Text style={ { fontSize: 10 , color:'#fff', fontWeight:'500', textAlign:'center', marginTop:"4%"} }>
                      https://ludoempire.com/
                      </Text>
                     </Hyperlink>
                      <Image 
                      style={{alignSelf:'center'}}
                      source={require("../../assets/Main/blueunderline.png")}/>
                      </View>



                  
 
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
        height:"78%",
        width:"80%",
        marginTop:"-31%",
        alignSelf:'center',
        borderRadius:10,
        borderWidth:0.8,
        borderColor:"#00C4FF"
     },
     fabzen:{
        height:"18%",
        width:"23%",
        alignSelf:'center',
        marginTop:"2%"
     },
     yellowline:{
        width:"100%",
        height:"2%",
     }
    
})