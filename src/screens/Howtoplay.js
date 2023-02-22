import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity, Button } from "react-native";
import { Component } from "react/cjs/react.development";
import Background from "../Components/Background";
import { LinearGradient } from "expo-linear-gradient";



export default class Howtoplay extends Component {

    
    main= () => {
        this.props.navigation.navigate('Main')
      }

      howtoclassic= () => {
         this.props.navigation.navigate('Howtoclassic')
      }

      howtoquick = () =>{
         this.props.navigation.navigate('Howtoquick')
      }

      howtotournament = () => {
         this.props.navigation.navigate('Howtotournament')
      }


     
    render() {
        return(
            <Background>
                 <TouchableOpacity on onPress={this.main}> 
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

                    
                       <View style={{flex:2, flexDirection:'column', justifyContent:'space-evenly'}}>
                    
                       <ImageBackground
                       style={style.classic}
                       source={require("../../assets/Main/howtoclassic.png")}>
                        <Text style={style.toptext}>CLASSIC LUDO</Text>
                        <Text style={ style.textcontent}>Win by taking all 4 gotis home</Text>

                        <TouchableOpacity on onPress={this.howtoclassic}>
                           <Image
                           style={style.playbutton} 
                           source={require("../../assets/Main/playbutton.png")}/>
                        </TouchableOpacity>
                       </ImageBackground>
                     
                      
                    
                       <ImageBackground
                       style={style.quick}
                       source={require("../../assets/Main/howtoquick.png")}>
                       <Text style={style.toptext}>QUICK LUDO</Text>
                       <Text style={style.textcontent}>Win by taking all 2 gotis home</Text>
                       <TouchableOpacity on onPress={this.howtoquick}>
                       <Image
                           style={style.playbutton} 
                           source={require("../../assets/Main/playbutton.png")}/>
                       </TouchableOpacity>

                       </ImageBackground>
                  
                    
         
                       <ImageBackground
                       style={style.tournament}
                       source={require("../../assets/Main/howtotournament.png")}>
                       <Text style={style.toptext}>TOURNAMENT</Text>
                       <Text style={style.textcontent}>XXXXXXXXXXXXXX</Text>
                       <TouchableOpacity on onPress={this.howtotournament}>
                       <Image
                           style={style.playbutton} 
                           source={require("../../assets/Main/playbutton.png")}/>
                       </TouchableOpacity>
                       </ImageBackground>
                     
                      
         
                       <ImageBackground
                       style={style.tips}
                       source={require("../../assets/Main/howtotips.png")}>
                      <Text style={style.toptext}>TIPS & TRICKS</Text>
                      <Text style={style.textcontent}>XXXXXXXXXXXXXXX</Text>
                       <TouchableOpacity>
                       <Image
                           style={style.playbutton} 
                           source={require("../../assets/Main/playbutton.png")}/>
                       </TouchableOpacity>
                       </ImageBackground>
              
                       </View>

                      
                    
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
     classic:{
        height:'50%',
        width:"100%",
        marginTop:"42%",
        alignSelf:'center'
     },
     quick:{
        height:'50%',
        width:"100%",
        alignSelf:'center' 
     },
     tournament:{
        height:'50%',
        width:"100%",
        alignSelf:'center' 
     },
     tips:{
        height:'50%',
        width:"100%",
        alignSelf:'center' 
     },
     toptext:{
        fontWeight:'900',
        fontSize:21, 
        color:"#fff",
        textAlign:'center',
        marginTop:'5%'
     },
     textcontent:{
        fontSize:12,
        fontWeight:'400',
        color:"#fff",
        textAlign:'center',
     
     },
     playbutton:{
      marginTop:'3%',
     alignSelf:'center'
     }
    
  
})