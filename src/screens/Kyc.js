import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity, Button } from "react-native";
import { Component } from "react/cjs/react.development";
import Background from "../Components/Background";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";



export default class Kyc extends Component {
 

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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginTop:'2%', marginLeft:"30%", marginRight:"55%"}}>KYC</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>

                        <View style={{flexDirection:'row', flex:2}}>
                            <View style={{flexDirection:'column', flex:2, marginTop:"15%", marginLeft:"5%"}}>
                                <Text style={{color:"#fff",fontWeight:'500', fontSize:13,marginTop:"5%" }}>UPLOAD YOUR PAN</Text>
                                <Text style={{color:"#fff",fontWeight:'500', fontSize:13, marginTop:"30%" }}>AADHAAR FRONT PHOTO</Text>
                                <Text style={{color:"#fff",fontWeight:'500', fontSize:13, marginTop:"30%" }}>AADHAAR BACK PHOTO</Text>
                               
                            </View>

                            <View style={{flexDirection:'column', flex:2, }}>
                            <Image 
                                style={{marginLeft:"25%", marginLeft:"28%", marginTop:"25%"}}
                                source={require("../../assets/Main/pancard.png")}></Image>
                                <Image 
                                style={{marginLeft:"25%", marginLeft:"23%", marginTop:"5%"}}
                                source={require("../../assets/Main/aadhaarfront.png")}></Image>
                                  <Image 
                                style={{marginLeft:"25%",  marginLeft:"23%"}}
                                source={require("../../assets/Main/aadhaarback.png")}></Image>
                            </View>
                            </View>

        

                        <Image 
                        style={style.yellowline1}
                        source={require("../../assets/Main/yellowline.png")}/>

                        <View style={{flexDirection:'row',flex:2, }}>
                            <View style={{flexDirection:'column', flex:2, marginTop:"4%"}}>
                                <Text style={{color:"#fff", marginTop:"7%",marginLeft:"5%"}}> PAN NO.</Text>
                                <Text style={{color:"#fff",marginTop:"12%",marginLeft:"5%"}}> AADHAAR NO.</Text>
                            
                            </View>

                            <View style={{flexDirection:'column', flex:2, }}>
                            <View style={style.inputnumber}>
                                   <TextInput style={{color:"#fff"}} placeholder="1234 4456 4567"></TextInput>
                                </View>
                                <View style={style.inputnumber}>
                                   <TextInput style={{color:"#fff"}} placeholder="1234 4456 4567"></TextInput>
                                </View>
                            </View>

                        </View>

                        <LinearGradient
      colors={["#E1A221","#CD791F"]}
      style={style.buttons}
    >
        <Text style={{fontSize:13, fontWeight:'600', color:'#fff'}}>SUBMIT</Text>
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
     }
})