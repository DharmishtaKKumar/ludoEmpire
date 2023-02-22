
import React, {useRef,} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,

 
} from 'react-native';
import Bluebuttons from '../Components/Bluebuttons';
import Buttons from '../Components/Buttons';
const imageUrl = "file:///C:/Users/Dharmishta%20K/Downloads/Line%2087%20(1).svg-";


export default function Otp({navigation}) {

const firstInput = useRef();
const secondInput = useRef();
const thirdInput = useRef();
const fourInput = useRef();
const fiveInput = useRef();
const sixInput = useRef();

return(
    <ImageBackground
    style={styles.frame}
    source={require("../../assets/loading1/frame2.png")}
   >
     <ImageBackground 
             style={styles.image}
             source={require("../../assets/loading1/background1.png")}>
     <Image style={styles.Logo2}
             source={require("../../assets/loading1/logo2.png")}>
                </Image>
                
      <Text style={{fontSize:25, color:"#FDB000",fontWeight:'500',marginLeft:"36%",marginRight:"35%", marginTop:"-8%"}}> Welcome!! </Text>
              
      <Text style={{color:"#fff",fontSize:16, marginLeft:"22%",marginRight:"22%", fontWeight:'600', textAlign:'center'}}> Login to India’s fastest growing real-money ludo game </Text> 
      
      <View>
        <Image 
        style={styles.enterotp}
        source={require("../../assets/loading1/login.png")}/>
        <Text style={{color:"#fff",  fontWeight:'800', marginLeft:"40%", marginTop:"-10%"}}>ENTER OTP</Text>
      </View>

    
      <View>
      <Bluebuttons>
    

<Text style={{fontSize:16, color:"#fff", marginTop:"-28%", marginLeft:"5%", marginRight:"5%",fontWeight:'600', textAlign:'center'}}>Please enter the OTP send to your Registered mobile number</Text>

   
<View style={{flexDirection:'row'}}>

<TextInput source={require("../../assets/Main/otpinput.png")}
  style={[styles.otpinput, {marginLeft:"1.5%", color:"#fff", textAlign:'center', fontSize:18, fontWeight:'700'}]}
  onChangeText={text => {
      text && secondInput.current.focus();
  }}
  ref={firstInput}
  keyboardType="number-pad"
  maxLength={1}
  
  />
 

<TextInput source={require("../../assets/Main/otpinput.png")}
   style={[styles.otpinput, {marginLeft:"1%",color:"#fff", textAlign:'center', fontSize:18, fontWeight:'700'}]}
  onChangeText={text => {text
    ?thirdInput.current.focus()
    :firstInput.current.focus();.0
    
  }}
  ref={secondInput}
  keyboardType="number-pad"
  maxLength={1}
  />

<TextInput source={require("../../assets/Main/otpinput.png")}
     style={[styles.otpinput, {marginLeft:"1%",color:"#fff", textAlign:'center', fontSize:18, fontWeight:'700'}]}
  onChangeText={text => {text
    ?fourInput.current.focus()
    :secondInput.current.focus();
  }}
  ref={thirdInput}
  keyboardType="number-pad"
  maxLength={1}
  />
  
  <TextInput source={require("../../assets/Main/otpinput.png")}
     style={[styles.otpinput, {marginLeft:"1%",color:"#fff", textAlign:'center', fontSize:18, fontWeight:'700'}]}
  onChangeText={text => {text
    ?fiveInput.current.focus()
    :secondInput.current.focus();
    !text && thirdInput.current.focus();
  }}
  ref={fourInput}
  keyboardType="number-pad"
  maxLength={1}
  />

<TextInput source={require("../../assets/Main/otpinput.png")}
     style={[styles.otpinput, {marginLeft:"1%",color:"#fff", textAlign:'center', fontSize:18, fontWeight:'700'}]}
  onChangeText={text => {text
    ?sixInput.current.focus()
    :fourInput.current.focus();
  }}
  ref={fiveInput}
  keyboardType="number-pad"
  maxLength={1}
  />

  

<TextInput source={require("../../assets/Main/otpinput.png")}
     style={[styles.otpinput, {marginLeft:"1%",color:"#fff", textAlign:'center', fontSize:18, fontWeight:'700'}]}
  onChangeText={text => {text
    ?sixInput.current.focus()
    :fiveInput.current.focus();
  }}
  ref={sixInput}
  keyboardType="number-pad"
  maxLength={1}
  />
</View>


<TouchableOpacity onPress={() => navigation.navigate("Main")}>
  <Buttons>
  <Text style={{color:"#fff", fontSize:17, textAlign:'center', alignSelf:'center', fontWeight:'600'}}>VERIFY</Text>
  </Buttons>
  </TouchableOpacity>


  <Text  style={{color:"#fff", fontSize:16, textAlign:'center', marginTop:"5%", fontWeight:'600'}}> Enter the OTP in 10 sec</Text>
       

    {/* <Image 
    style={styles.people}
    source={require("../../assets/loading1/people.png")}></Image>
    <Text style={{marginLeft:"15%", marginRight:"74%", color:"#fff",fontSize:11,textAlign:'center'}}>50 LAKH USERS </Text> */}
 
 
    <Image source={{uri: imageUrl}}
    style={styles.line} />
{/* 
    <Image 
    style={styles.dice}
    source={require("../../assets/loading1/dice.png")}></Image>
    <Text style={{color:"#fff", marginLeft:"33%",marginRight:"55%",fontSize:11,textAlign:'center'}}>2 LAKH DIALY PLAYERS</Text> */}
  

    {/* <Image 
    style={styles.phone}
    source={require("../../assets/loading1/phone.png")}></Image>
    <Text style={{color:"#fff", marginLeft:"50%",marginRight:"37%",fontSize:11,textAlign:'center'}}>24/7 SUPPORT</Text> */}
    


    {/* <Image 
    style={styles.sub}
    source={require("../../assets/loading1/sub.png")}></Image>
    <Text style={{color:"#fff", marginLeft:"61%",marginRight:"10%",fontSize:11,textAlign:'center' }}> INSTANT WITHDRAWAL</Text> */}
    </Bluebuttons>
    </View>
  
      </ImageBackground>
               </ImageBackground>
);
}

const styles= StyleSheet.create({
frame:{
    height:"100%",
    width:"100%"
},
image:{
    height:"100%",
    width:"100%",
},
Logo2:{
    marginLeft:"32%",
    marginTop:"6%"
   
  },
  enterotp:{
   marginLeft:"25%",
   alignItems:'center'
  },
  rectangle:{
    width:"85%",
    height:"75%",
    marginLeft:"6.5%",
    marginTop:"1%",
    justifyContent:'center',
    alignItems:'center',
  },
  otpinput:{
  height:32,
  width:32,
  marginTop:'7%',
  marginLeft:"18%",
  backgroundColor:"#021C4E",
  borderWidth:1.3,
  borderRadius:10,
  borderColor:"#00C4FF",
  },
  verifybutton:{
    marginTop:"7%",
    marginLeft:"31%",
    height:27,
    width:150
  },
  people:{
    marginLeft:'17%',
    marginTop:"11%"
   },

   dice:{
    marginLeft:'36%',
    marginTop:"-10%"
   },
   phone:{
     marginLeft:'55%',
    marginTop:"-13%"
   },
   sub:{
     marginLeft:"73%",
     marginTop:"-9%"
   },
  //  line:{
  //    marginTop:"95%",
  //    marginLeft:"60%",
  //    height:55,
  //    width:70
  //  },
})