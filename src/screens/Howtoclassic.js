import React from "react";
import { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Button} from "react-native";
import Background from "../Components/Background";
import { LinearGradient } from "expo-linear-gradient";
import { Video, AVPlaybackStatus } from "expo-av";

export default function Howtoclassic ({navigation}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({}) ;

        return(
          <Background>

                <TouchableOpacity onPress={navigation.navigate("Howtoplay")}> 
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

                    <Text style={style.toptext}>CLASSIC LUDO</Text>

                    <Text style={{fontWeight:'400', fontSize:12, color:"#DF9D21", textAlign:'center'}}>Win by taking all 4 gotis home</Text>

                    <Image 
                        style={style.yellowline1}
                        source={require("../../assets/Main/yellowline.png")}/>

                        <View style={{flexDirection:'column', marginLeft:'5%', marginRight:'5%'}}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>1. </Text>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}> In our Classic Ludo, you will start with 4 pawns at the base.</Text>
                            </View>
                            
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>2. </Text>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}> You can start moving pawns when you get 6 or 1.</Text>
                            </View>
          
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>3. </Text>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>Win a match by taking all 4 pawns home before your opponents.</Text>
                            </View>
           
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>4. </Text>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>Taking pawns home or killing other pawns will give you extra turn.</Text>
                            </View>
                          
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>5. </Text>
                            <Text style={{fontWeight:'700', fontSize:10,color:'#fff', marginTop:'5%'}}>Two or more of your pawns waiting together on the same box cannot be killed.</Text>
                            </View>
                        </View>

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