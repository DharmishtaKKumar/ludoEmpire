import React from "react";
import { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Button} from "react-native";
import Background from "../Components/Background";
import { LinearGradient } from "expo-linear-gradient";
import { Video, AVPlaybackStatus } from "expo-av";

export default function Howtotournament ({navigation}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({}) ;

        return(
          <Background>

                <TouchableOpacity onPress={navigation.navigate("Howtoplay")} > 
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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginTop:'2%', marginLeft:"13%", marginRight:"38%"}}>HOW TO PLAY</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>

                    <Image 
                       style={{alignSelf:'center'}}
                       source={require("../../assets/Main/bluetopframe.png")}/>

                       
                    <Video
                       ref={video}
                       style={style.video}
                       source={require("../../assets/video/quickLudo.mp4")}
                       useNativeControls
                       resizeMode="contain"
                       isLooping
                       onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                        />

                    <View 
                       style={style.playbutton}
                       source={require("../../assets/Main/playbutton.png")}>
         
                    <Button
                       title={status.isPlaying ? "Pause" : "Play"}
                       onPress={() =>
                       status.isPlaying
                        ? video.current.pauseAsync()
                        : video.current.playAsync()
                       }
                       />
                    </View>

                    <Text style={style.toptext}>TOURNAMENT</Text>

                    <Image 
                       style={style.rules}
                       source={require("../../assets/Main/rules.png")}/>

                    <Image 
                        style={style.yellowline1}
                        source={require("../../assets/Main/yellowline.png")}/>

                        </LinearGradient>


          </Background>
        );
    
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
        marginTop:"4%"
     },
     heading:{
        height:"41%",
        width:"73.9%",
        alignSelf:'center',
        marginLeft:"-11%",
        marginTop:"5%"
       
     },
     contentbox:{
        height:"80%",
        width:"80%",
        marginTop:"-31%",
        alignSelf:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:"#00C4FF"
     },
     video:{
        height:"35%",
        width:"80%",
        alignSelf:'center'

     },
     playbutton:{
        marginTop:'3%',
       alignSelf:'center'
       },
       toptext:{
        fontWeight:'900',
        fontSize:21, 
        color:"#fff",
        textAlign:'center',
        marginTop:'5%'
     },
     yellowline1:{
        width:"75%",
        marginTop:"2%",
        alignSelf:'center'
     }

})