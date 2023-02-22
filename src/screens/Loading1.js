
import React from "react";
import {View, StyleSheet,Animated, style,TouchableHighlight, Text,Image,Pressable,text, TouchableOpacity, ImageBackground} from "react-native";
import { Component } from "react/cjs/react.production.min";

export default class Loading1 extends Component {

  show= () => {
    this.props.navigation.navigate('Loading2')
  }
  render() {
    return (
        <View>
          
          <TouchableOpacity on onPress={this.show}>
          <ImageBackground
             style={styles.frame}
             source={require("../../assets/loading1/frame.png")}
            >
              
      
            
             <Image style={styles.Logo3}
             source={require("../../assets/loading1/logo3.png")}>
                </Image>
         <View>
         <Image 
         source={require("../../assets/loading1/fabzen.png")}
         style={styles.fabzen}/>
         <Text style={{color:"#fff", marginTop:"0.5%", textAlign:'center'}}>© Fabzen Technologies Pvt Ltd </Text>
         </View>



                </ImageBackground>
        
         

             </TouchableOpacity>

        </View>
    );
}
}

const styles=StyleSheet.create({
    frame:{
 
        height:"100%",
        width:"100%"
      },

      Logo3:{
       marginLeft:"27%",
       marginTop:"58%",
       height:"20%",
       width:"45%"
      },
      fabzen:{
         height:"5%",
         width:"5%",
         marginLeft:"48%",
         marginTop:"63%"
      },
      container: {
        marginTop:"-25%"
      },
      btn: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 100,
        marginTop:"-25%"
      },
      btnPress: {
        borderColor: 'red',
        borderWidth: 1,
        height: 30,
        width: 100,
      },
    
});
