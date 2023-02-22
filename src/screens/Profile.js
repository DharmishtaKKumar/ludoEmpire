import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity, Button } from "react-native";
import { Component } from "react/cjs/react.development";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../Components/Background";
import { TextInput } from "react-native-gesture-handler";
import Buttons from "../Components/Buttons";
import Hyperlink from "react-native-hyperlink";


export default class Refund extends Component {

    main= () => {
        this.props.navigation.navigate('Main')
      }

      name= () => {
        this.props.navigation.navigate('Entername')
      }

      mailid= () => {
        this.props.navigation.navigate('Mailid')
      }

      kyc= () => {
        this.props.navigation.navigate('Kyc')
      }

      referralhistory = () => {
        this.props.navigation.navigate('Referralhistory')
     }

      gamehistory = () => {
         this.props.navigation.navigate('Gamehistory')
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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginLeft:"15%",marginTop:'2%', marginRight:"40%"}}>MY PROFILE</Text>
                    </ImageBackground>
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>

                      <TouchableOpacity>
                        <Image 
                        style={style.editarrow}
                         source={require("../../assets/Main/editarrow.png")}/>
                         </TouchableOpacity>

                        <Image 
                        style={style.profilepic}
                         source={require("../../assets/Main/profilepic.png")}/>

                        
                          <Text style={{color:"#fff",fontWeight:'500',fontSize:13, marginTop:"3%", marginLeft:"5%"}}>USER NAME</Text>
                          <View  style={style.textinput} >
                          <Text style={{ fontWeight:'400', fontSize:12, marginLeft:'5%',color:"#fff",}}> USER1234567</Text>
                            </View>
                      

                            
                          <Text style={{color:"#fff",fontWeight:'500',fontSize:13, marginTop:"3%", marginLeft:"5%"}}>NAME</Text>
                          <TouchableOpacity on onPress={this.name}>
                          <View  style={style.input}/>
                          </TouchableOpacity>
                          <View>
                           <TouchableOpacity>
                           <Image 
                        style={style.edittext}
                         source={require("../../assets/Main/editarrow.png")}/>
                            </TouchableOpacity> 
                            </View>
                          

                            
                           <Text style={{color:"#fff",fontWeight:'500',fontSize:13, marginTop:"-27%", marginLeft:"5%"}}>MOBILE</Text>
                          <View  style={style.textinput} >
                          <TextInput style={{ color:'#fff',fontWeight:'400', fontSize:12, marginLeft:'5%', }}  placeholder="User1234567"></TextInput>
                            </View>

                              
                          <Text style={{color:"#fff",fontWeight:'500',fontSize:13, marginTop:"3%", marginLeft:"5%"}}>E-MAIL</Text>
                          <TouchableOpacity on onPress={this.mailid} >
                          <View  style={style.input} />
                          </TouchableOpacity> 
                        
                           <View>
                           <TouchableOpacity>
                           <Image 
                        style={style.edittext}
                         source={require("../../assets/Main/editarrow.png")}/>
                            </TouchableOpacity>
                             </View>

                        <Text style={{color:"#DF9D21", fontWeight:'700', fontSize:11, textAlign:'center', marginTop:"-27%"}}> Your email is not verified. Please check your inbox</Text>
              
                        <Image 
                        style={style.yellowline1}
                        source={require("../../assets/Main/yellowline.png")}/>

       
                {/* <View style={{flexDirection:'column',  justifyContent:"space-between",marginLeft:"12%"}}>
                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={{height:"25%", width:"20%", borderRadius:20,borderWidth:1,borderColor:'#00C4FF',}}>
                        <Text style={{color:"#fff",textAlign:'center', fontSize:10, fontWeight:'400', marginTop:'5%'}}> 2</Text>
                      </LinearGradient>
                      <Text style={{color:"#fff",fontSize:8, fontWeight:'500',marginTop:"-5%" }}>TOTAL MATCHES</Text>
                </View>

                <View style={{flexDirection:'column', flex:6, justifyContent:"space-between"}}>
                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={{height:"25%", width:"20%",borderRadius:20,borderWidth:1,borderColor:'#00C4FF', marginLeft:"38%", marginTop:"-23.5%"}}>
                        <Text style={{color:"#fff",textAlign:'center', fontSize:10, fontWeight:'400', marginTop:'5%'}}> 2</Text>
                      </LinearGradient>
                </View>

                <View style={{flexDirection:'column', flex:6, justifyContent:"space-between"}}>
                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={{height:"25%", width:"20%", borderRadius:20,borderWidth:1,borderColor:'#00C4FF', marginLeft:"65%", marginTop:"-47.5%"}}>
                        <Text style={{color:"#fff",textAlign:'center', fontSize:10, fontWeight:'400', marginTop:'5%'}}> 2</Text>
                      </LinearGradient>
                </View> */}
        
              <Image 
                        style={style.yellowline2}
                        source={require("../../assets/Main/yellowline.png")}/>

                        <TouchableOpacity on onPress= {this.kyc}>
                        <Buttons>
                        <Text style={{color:'#fff', fontWeight:'600', fontSize:13 }}> KYC</Text>
                        </Buttons>
                        </TouchableOpacity>
                        
                        <Hyperlink linkDefault={ true }>
                          <Text style={{ fontSize: 10 , color:'#DF9D21', fontWeight:'400', textAlign:'center'}}>Your KYC is pending</Text>
                          </Hyperlink>
                        
                        <TouchableOpacity on onPress={this.referralhistory}>
                        <LinearGradient
                          colors={["#25A8E0", "#1F73C7"]}
                          style={style.bluebutton}>
                            <Text style={{color:'#fff', fontWeight:'600', fontSize:13 }}> REFERRAL HISTORY</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                         
                        <TouchableOpacity on onPress={this.gamehistory}>
                        <LinearGradient
                          colors={["#25A8E0", "#1F73C7"]}
                          style={style.bluebutton}>
                            <Text style={{color:'#fff', fontWeight:'600', fontSize:13}}> GAME HISTORY</Text>
                        </LinearGradient>
                        </TouchableOpacity>
              
                        </LinearGradient>

                </Background>

        );
      }
    }

    const style= StyleSheet.create({
      close:{
        marginLeft:"90%",
        marginTop:"5%"
      },
      topbuttondesign:{
        alignSelf:'center',
        marginLeft:"20%",
        height:"25%",
        width:"70%",
        marginTop:"3%"
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
      width:"84%",
      marginTop:"-31%",
      alignSelf:'center',
      borderRadius:10,
      borderWidth:0.8,
      borderColor:"#00C4FF",

   },
   editarrow:{
      marginTop:"2%",
      alignSelf:'center',
      marginLeft:"15%"
   },
   profilepic:{ 
    height:"10%",
    width:"15%",
    alignSelf:'center',
    marginTop:"-3%",
   },
   edittext:{
    alignSelf:'flex-end',
    marginRight:"5%",
    marginTop:"-38%"
  
   },
 
   textinput:{
    height:"6%",
    width:"50%",
    backgroundColor:"#090C5B",
    borderWidth:1,
    borderColor:'#00C4FF',
    borderRadius:8,
    fontSize:12,
    marginLeft:"35%",
    marginTop:"-6%"
   },
   input:{
    height:"26%",
    width:"50%",
    backgroundColor:"#090C5B",
    borderWidth:1,
    borderColor:'#00C4FF',
    borderRadius:8,
    fontSize:12,
    marginLeft:"35%",
    marginTop:"-5%"
   },
   yellowline1:{
    height:"2%", 
    width:"100%",
    alignSelf:'center', 
    marginTop:"3%",
    marginBottom:"3%"
   },
   yellowline2:{
    height:"2%", 
    width:"100%",
    alignSelf:'center', 
    marginTop:"15%",
    marginBottom:"-10%"
   },
 
    bluebutton:{
      width:180,
      height:40,
      alignItems: "center", 
      justifyContent:'center',
      alignSelf:'center',
      marginTop:"5%",
      borderRadius:20,
      marginBottom:"-3%"
    
    }
   
   })