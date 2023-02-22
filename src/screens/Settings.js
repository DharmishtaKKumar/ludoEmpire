import React from "react";
import {View, StyleSheet,Image,styles, Text,TouchableOpacity, ImageBackground } from "react-native";
import { Component } from "react/cjs/react.development";
import Background from "../Components/Background";
import Button120 from "../Components/Button120";
import { LinearGradient } from "expo-linear-gradient";


export default class Settings extends Component{

    helpdesk= () => {
        this.props.navigation.navigate('Helpdesk')
      }

      aboutus= () => {
        this.props.navigation.navigate('Aboutus')
      }

      
      privacy= () => {
        this.props.navigation.navigate('Privacy')
      }

      
      terms= () => {
        this.props.navigation.navigate('Terms')
      }

      
      refund= () => {
        this.props.navigation.navigate('Refund')
      }
    render() {
        return(
            <View>
             <Background>
                <TouchableOpacity>
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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginLeft:"20%",marginTop:'2%', marginRight:"44%"}}>SETTINGS</Text>
                    </ImageBackground>
        
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>
                   <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.topbar}>
                         <View style={{flex:3, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%",marginTop:"4%"}}>
                     <View>
                     <TouchableOpacity>
                     <Image 
                      style={style.notification}
                      source={require("../../assets/Main/notification.png")}/>
                      </TouchableOpacity>
                     
                      </View>

                      <TouchableOpacity>
                     <Image 
                      style={style.sound}
                      source={require("../../assets/Main/sound.png")}/>
                      </TouchableOpacity>

                      <TouchableOpacity>
                     <Image 
                      style={style.vibration}
                      source={require("../../assets/Main/vibration.png")}/>
                      </TouchableOpacity>
                      </View>
                     
                     
                     <Text style={{color:"#fff",marginTop:"10.5%",fontSize:8, fontWeight:'500', marginLeft:"7%"}}>NOTIFICATION</Text>
                     <Text style={{color:"#fff",marginTop:"-3%",fontSize:8, fontWeight:'500', marginLeft:"46%",marginRight:"45%"}}>SOUND</Text>
                     <Text style={{color:"#fff",marginTop:"-4%",fontSize:8, fontWeight:'500', marginLeft:"78%", marginRight:"8%"}}>VIBRATIONS</Text>
               
                   <Image 
                      style={style.yellowline}
                      source={require("../../assets/Main/yellowline.png")}/>

        
        </LinearGradient>

        <View style={{flex:3, flexDirection:"column", justifyContent:"space-between", marginTop:"5%"}}>
 
           <View>
            <TouchableOpacity on onPress={this.helpdesk}>
                <Text style={{color:"#EDA310", fontWeight:'600', fontSize:18, textAlign:'center', marginTop:"10%"}}>Helpdesk</Text>
                <Image 
                      style={{width:"24%",height:'12%', alignSelf:'center'}}
                      source={require("../../assets/Main/yellowline.png")}/>
            </TouchableOpacity>
           </View> 

           <View>
            <TouchableOpacity on onPress={this.aboutus}>
                <Text style={{color:"#EDA310", fontWeight:'600', fontSize:18, textAlign:'center',marginTop:"-4%"}}>About Us</Text>
                <Image 
                      style={{width:"24%",height:'20%', alignSelf:'center'}}
                      source={require("../../assets/Main/yellowline.png")}/>
            </TouchableOpacity>
           </View> 
           <View>
            <TouchableOpacity  on onPress={this.privacy}>
                <Text style={{color:"#EDA310", fontWeight:'600', fontSize:18, textAlign:'center',marginTop:"-13%"}}>Privacy & Policy</Text>
                <Image 
                      style={{width:"40%",height:'37%', alignSelf:'center'}}
                      source={require("../../assets/Main/yellowline.png")}/>
            </TouchableOpacity>
           </View> 

           <View>
            <TouchableOpacity  on onPress={this.terms}>
                <Text style={{color:"#EDA310", fontWeight:'600', fontSize:18, textAlign:'center', marginTop:'-30%'}}>Terms & Conditions</Text>
                <Image 
                      style={{width:"48%",height:'65%', alignSelf:'center'}}
                      source={require("../../assets/Main/yellowline.png")}/>
            </TouchableOpacity>
           </View> 

           <View>
            <TouchableOpacity  on onPress={this.refund}>
                <Text style={{color:"#EDA310", fontWeight:'600', fontSize:18, textAlign:'center', marginTop:"-57%"}}>Refund & Cancellations</Text>
                <Image 
                      style={{width:"60%",height:'101.5%', alignSelf:'center'}}
                      source={require("../../assets/Main/yellowline.png")}/>
            </TouchableOpacity>
           </View> 

           </View>
           <TouchableOpacity>
           <Button120>
            <Text style={{color:'#fff',fontWeight:'600',fontSize:16}}>LOGOUT</Text>
           </Button120>
           </TouchableOpacity>
           
           <TouchableOpacity>
           <LinearGradient
               colors={["#8FBA00","#3A8B00"]}
               style={style.buttons} >
            <Text style={{color:"#fff",fontWeight:'600',fontSize:16 }}> QUIT</Text>
            </LinearGradient>
            </TouchableOpacity>
        </LinearGradient>


          

              </Background>
            </View>
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
    borderWidth:1,
    borderColor:"#00C4FF"
 },
 topbar:{
    height:"15%",
    width:"100%",
    borderRadius:7.5
 },
 yellowline:{
    width:"100%",
    height:"20%",
    marginTop:"3%",
    marginBottom:"77%"
 },
 buttons: {
    width:120,
    height:28,
    alignItems: "center", 
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:"10%",
    borderRadius:20

},
})



