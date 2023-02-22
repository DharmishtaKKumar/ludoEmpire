import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../Components/Background";
import Button120 from "../Components/Button120";

export default class Mourya extends React.Component {
    render() {
    return(
        <Background>
          <View>
            <TouchableOpacity>
         <Image
         style={styles.callback}
            source={require("../../assets/Main/callback.png")}/>
            </TouchableOpacity>
            <View>
        
        <Image 
        style={styles.money}
        source={require("../../assets/Main/money.png")}/>
  
        <Text style={{color:'#fff',fontSize:9,fontWeight:'700',alignSelf:'center', marginTop:"-5.5%", alignSelf:'center'}}>23,520.00</Text>
        
        <TouchableOpacity>
        <Image 
        style={styles.plus}
        source={require("../../assets/Main/plus.png")}/>
        </TouchableOpacity>
        
        </View>
        <Text style={{color:"#fff", alignSelf:'center',marginTop:"-4%",marginLeft:"2.5%", fontSize:12}}>WALLET</Text>
        
       
        <Image
        style={styles.profile}
        source={require("../../assets/Main/profile.png")}/>
        <Text style={{color:"#fff", marginLeft:"87.5%", fontSize:10}}>PROFILE</Text>

   <ImageBackground 
   style={styles.mourya}
   source={require("../../assets/Main/mourya.png")}>
         
         <View>
         <Image 
         style={styles.classicblue}
         source={require("../../assets/Main/classicblue.png")}/>
         <Text style={{color:"#fff", fontSize:17,fontWeight:'700', textAlign:'center', marginTop:"-18%"}}>CLASSIC LUDO</Text>
         <Text style={{color:"#fff", fontWeight:'600',fontSize:7, textAlign:'center'}}> IN CLASSIC LUDO, </Text>
         <Text style={{color:"#fff", fontWeight:'600',fontSize:7, textAlign:'center'}}> TAKE ALL 4 GOTIS/PAWNS HOME</Text>
         </View>

         <Image 
         style={styles.leftfire}
         source={require("../../assets/Main/fireludo.png")}/>
         
         <View>
         <Image 
         style={styles.winningamount}
         source={require("../../assets/Main/winningamount.png")}/>
         <Text style={{color:'#fff', fontWeight:'800', fontSize:8, textAlign:'center', marginTop:"-30%"}}>WINNING AMOUNT</Text>
         </View>

         <Image 
         style={styles.rightfire}
         source={require("../../assets/Main/fireludo.png")}/>

         <Text style={{color:'#fff', fontWeight:'700', fontSize:8, textAlign:'center', marginTop:"6%"}}> SELECT ENTRY AMOUNT </Text>
         
         <View style={{flexDirection:'column', flex:6, justifyContent:"space-between"}}>
            <View style={{flex:3, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%",}}>
                 <View>
                    <TouchableOpacity>
                    <ImageBackground
                    style={styles.rupee1}>
                      <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>1</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 
                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                   style={styles.rupee1}>
                      <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>3</Text>
                           </View>
                   
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                     style={styles.rupee1}>
                          <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>5</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                     style={styles.rupee1}>
                         <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>10</Text>
                           </View>
                     
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

            </View>

            <View style={{flex:3, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%"}}>
                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                     style={styles.rupee1}>
                         <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>30</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                     style={styles.rupee1}>
                         <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>100</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                  style={styles.rupee1}>
                    <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>300</Text>
                           </View>
                 
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                    style={styles.rupee1}>
                         <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center' }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>500</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

            </View>

            <View style={{flex:3, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%"}}>
                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                    style={styles.rupee1}>
                         <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>1000</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                   style={styles.rupee1}>
                     <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>2000</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                    style={styles.rupee1}>
                         <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>3000</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                 style={styles.rupee1}>
                    <View style={{alignSelf:'center',marginTop:"5%", flexDirection:'row'}}>
                    <Image 
                           style={{alignSelf:'center', }}
                           source={require("../../assets/Main/rupee.png")}/>
                           <Text style={{color:"#EEEEEE", alignSelf:'center',fontSize:10, fontWeight:'600',}}>5000</Text>
                           </View>
                    </ImageBackground>
                    </TouchableOpacity>
                 </View>

            </View>
        
         </View>


         <View>
            <Image 
            style={styles.yellowline}
            source={require("../../assets/Main/yellowline.png")}/>
         </View>

         <Text style={{color:"#fff", fontWeight:'700',fontSize:12, textAlign:'center'}}> SELECT TOKEN COLOUR</Text>

         <View style={{flexDirection:'row', flex:4, marginLeft:"20%", marginRight:"10%"}}>
           <View style={{flexDirection:'column', flex:2}}>
            <View>
                <Image source={require("../../assets/Main/bluegoti.png")}/>
                <TouchableOpacity>
                <Image source={require("../../assets/Main/gotiselect.png")}/>
                </TouchableOpacity>
            </View>


           </View>

           <View style={{flexDirection:'column', flex:2}}>
            <View>
                <Image source={require("../../assets/Main/greengoti.png")}/>
                <TouchableOpacity>
                <Image source={require("../../assets/Main/gotiselect.png")}/>
                </TouchableOpacity>
            </View>


           </View>


           <View style={{flexDirection:'column', flex:2}}>
            <View>
                <Image source={require("../../assets/Main/yellowgoti.png")}/>
                <TouchableOpacity>
                <Image source={require("../../assets/Main/gotiselect.png")}/>
                </TouchableOpacity>
            </View>


           </View>

           <View style={{flexDirection:'column', flex:2, }}>
            <View>
                <Image source={require("../../assets/Main/redgoti.png")}/>
                <TouchableOpacity>
                <Image source={require("../../assets/Main/gotiselect.png")}/>
                </TouchableOpacity>
            </View>


           </View>

         </View>

         <Button120>
            <Text style={{color:"#fff", fontWeight:'600',fontSize:16}}>PLAY</Text>
         </Button120>
         

   </ImageBackground>
          </View>
        </Background>
    );
}
}

const styles= StyleSheet.create({
    callback:{
        height:26,
        width:26,
        marginTop:"5%",
        marginLeft:"3%"
    },
    money:{
       height:33,
       width:123,
       marginTop:"-5%",
       alignSelf:'center',
       position:'relative',
    },
    plus:{
       height:25,
       width:25,
       marginLeft:"65%",
       marginTop:"0.5%"
    },
    profile:{
       marginTop:"-11.5%",
       marginLeft:"88%"
    },
    mourya:{
        height:524,
        width:293,
        alignSelf:'center',
       marginTop:"15%"
    },
    classicblue:{
        alignSelf:'center',
        marginTop:"-9%"
    },
    winningamount:{
        alignSelf:'center',
        marginTop:"-34%"
 
    },
    leftfire:{
        marginTop:"31%",
        marginLeft:"5%"
    },
    rightfire:{
        marginTop:"-27%",
        marginLeft:"75%"
    },
    rupee1:{
    
        height:22,
        width:50,
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:10
    },
    yellowline:{
        alignSelf:'center',
        
    }
   

})
