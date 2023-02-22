import React, { useState } from "react";
import {View, StyleSheet,Animated,Easing, Text,Image, index, TouchableOpacity,ImageBackground, Modal, Button} from "react-native";
import Buttons from "../../src/Components/Buttons";
import Background from "../Components/Background";



export default class Language extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          rotateValueHolder: new Animated.Value(0)
        };
      }
      componentDidMount = () => {
        this.startImageRotateFunction();
      }
      startImageRotateFunction = () => {
        Animated.loop(Animated.timing(this.state.rotateValueHolder, {
          toValue: 1,
          duration: 3800,
          easing: Easing.linear,
          useNativeDriver: false,
        })).start();
      };

    
    
    render() {
    return (
        <View>
          
         <Background>

         <Animated.Image
            style={{
                width: 153,
                height: 154,
                marginTop:"2%",
              alignSelf:"center",
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )
                  }
                ],
            }}
              source={require("../../assets/loading1/logobg.png")}
          />

<Animated.Image
            style={{
              width: 153,
              height: 154,
              alignSelf:"center",
              marginTop:"-37%",
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '-360deg'],
                        }
                      )
                  }
                ],
            }}
              source={require("../../assets/loading1/logogoldbg.png")}
          />
          <Image
          style={styles.logo}
          source={require("../../assets/loading1/logo.png")}/>

            <Text style={{color:"#fff", marginLeft:85, marginRight:85, fontSize:18, textAlign:'center',marginTop:"14%"}}>Please select the language of your choice!</Text>
 
           

                <View >
                <Image  
                style={styles.button1}
                source={require("../../assets/loading1/button1.png")}></Image>


                <Text style={{color:"#fff", marginTop:"-8%",marginLeft:"36%",fontSize:22}}>English</Text>
                
            <TouchableOpacity > 
             <Image 
                style={{marginLeft:"61%",marginTop:"-6%"}}
                source={require("../../assets/loading1/circlemark.png")} />
            </TouchableOpacity>
                </View>
       
           
                <View >
                <Image 
             style={styles.button2}
                source={require("../../assets/loading1/button1.png")}></Image>
                <Text style={{color:"#fff", marginTop:"-8%",marginLeft:"37%",fontSize:22}}>हिन्दी</Text>
                
            <TouchableOpacity>
                <Image 
                style={{marginLeft:"61%",marginTop:"-6%"}}
                source={require("../../assets/loading1/circlemark.png")}/>
            </TouchableOpacity>
                </View>

            <TouchableOpacity onPress={() =>this.props.navigation.navigate('EnterNum')} >
              <Buttons >
                    <Text style={{alignContent:'center',color:"#fff", fontWeight:'500', fontSize:19}}> Continue</Text>
                    </Buttons>
                    </TouchableOpacity>
             
            

                </Background>
                </View>
    );
}
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
   logo:{
        height:101,
        width:131,
        marginTop:"-32%",
        alignSelf:'center'
   },
    button1:{
       alignSelf:'center',
       marginTop:"25%"
    },
    button2:{
        alignSelf:'center',
        marginTop:"12%"
    },

      })