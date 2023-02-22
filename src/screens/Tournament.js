import React from "react";
import { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image,ScrollView, ImageBackground} from "react-native";
import Background from "../Components/Background";

export default class Tournament extends Component{
    render() {
        return(
            <View>
              <Background>

                <View style={{flexDirection:'row', marginTop:'5%'}}>
                    <TouchableOpacity>
                       <Image 
                    style={style.callback}
                    source={require("../../assets/Main/callback.png")}/>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', alignSelf:'center', marginLeft:'20%'}}>
                    <Image 
                      style={style.moneyframe}
                      source={require("../../assets/Main/moneyframe.png")}/>
                    <Image 
                      style={style.moneybox}
                      source={require("../../assets/Main/moneybox.png")}/>
                    <Text></Text>

                    <TouchableOpacity >
                      <Image 
                         style={style.plus}
                         source={require("../../assets/Main/plus.png")}/>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection:'row', marginLeft:'20%', justifyContent:'space-evenly', marginRight:'1%'}}>
                     <View style={{flexDirection:'column'}}>
                         <Image 
                           style={style.rules}
                           source={require("../../assets/Main/ruleslogo.png")}/>
                          <Text style={style.brownword}>RULES</Text>
                      </View>
                      <View style={{flexDirection:'column'}}></View>
                         <Image 
                           style={style.profile}
                           source={require("../../assets/Main/profile.png")}/>
                          <Text style={style.brownword}>PROFILE</Text>
                    </View>
                </View>

             <ImageBackground 
              style={style.tournamentbluescreen}
             source={require("../../assets/Main/tournamentbluescreen.png")}>
             
             <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'19%',marginLeft:'5%', marginRight:'10%'}}>

              <View style={style.buttons}>
                <TouchableOpacity>
                  <Text style={style.buttontext}>UPCOMING</Text>
                </TouchableOpacity>
                  </View>

                  <View style={style.buttons}>
                <TouchableOpacity>
                  <Text style={style.buttontext}>JOINED</Text>
                </TouchableOpacity>
                  </View>

                  <View style={style.buttons}>
                <TouchableOpacity>
                  <Text style={style.buttontext}>FINISHED</Text>
                </TouchableOpacity>
                  </View>

                  </View>

                <ImageBackground 
                  style={style.optionsbox}
                  source={require("../../assets/Main/optionsbox.png")}>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                       <TouchableOpacity>
                      <View style={style.options}>
                      <Image 
                        source={require("../../assets/Main/options.png")}/>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={style.options}>
                      <Text style={style.optionstext}>ALL</Text>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={style.options}>
                      <Text style={style.optionstext}>2 PLAYERS</Text>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={style.options}>
                      <Text style={style.optionstext}>4 PLAYERS</Text>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={style.options}>
                      <Text style={style.optionstext}>ONE WINNER</Text>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={style.options}>
                      <Text style={style.optionstext}>MULTI WINNERS</Text>
                      </View>
                      </TouchableOpacity>

                    </View>

                </ImageBackground>
                <ImageBackground style={style.smallbluebox}>

                 <ScrollView>
                  <View style={{flexDirection:'column'}}>
                    
                    <ImageBackground
                      style={style.tournamentslist}
                      source={require("../../assets/Main/10rslakhpati.png")}>
                      </ImageBackground>

                    <ImageBackground
                      style={style.tournamentslist}
                      source={require("../../assets/Main/10rslakhpati.png")}>
                      </ImageBackground>

                      <ImageBackground
                      style={style.tournamentslist}
                      source={require("../../assets/Main/10rslakhpati.png")}>
                      </ImageBackground>
                 
                  
                  </View>
               

                  </ScrollView>
    

             

                </ImageBackground>

                </ImageBackground>
              </Background>
            </View>
        );
    }
}


const style= StyleSheet.create({
    callback:{
    
    },
    brownword:{
        fontSize:8,
        color:'#D3AC81',
        fontWeight:'500',
        lineHeight:9
    },
 
    tournamentbluescreen:{
       height:'92%',
       width:'94.7%',
       alignSelf:'center',
       position:'absolute',
       marginTop:'20%'
    
    },
    buttons:{
      height:'165%',
      width:'30%',
      backgroundColor:'#022D61',
      borderRadius:10,
      borderWidth:0.6,
      borderColor:'#00FFFF'

    }, 
    buttontext:{
      color:"#fff",
      fontWeight:'500', 
      fontSize:9, 
      textAlign:'center', 
      marginTop:'5%'
    },
    optionsbox:{
      height:'25%',
      width:"95%", 
      alignSelf:'center',
      marginTop:'1%'
    },
    options:{
      height:'25%', 
      backgroundColor:'#022D61',
      borderRadius:10,
      borderWidth:0.6,
      borderColor:'#00FFFF', 
      marginTop:'15%'
    },
    optionstext:{
      fontSize:8,
      fontWeight:'500',
      color:'#fff',
      lineHeight:9,
      marginTop:'5%',
      marginRight:'1%', 
  
    },
    smallbluebox:{
      height:'55%',
      width:'90%',
      backgroundColor:'#fff',
      position:'absolute',
      marginTop:'35%',
      alignSelf:'center',

    },
    tournamentslist:{
      height:'75%',
      width:'90%',
      alignSelf:'center'
    }

})