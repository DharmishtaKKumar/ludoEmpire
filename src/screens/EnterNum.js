
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  Animated,
 
} from 'react-native';
import Bluebuttons from '../Components/Bluebuttons';
import Buttons from '../Components/Buttons';



export default function EnterNum({navigation}) {
const [phoneNumber, setPhoneNumber] = useState('')

    return(
   <View>

  
        <ImageBackground
        style={styles.frame}
        source={require("../../assets/loading1/frame2.png")}
       >
        <ImageBackground 
             style={styles.image}
             source={require("../../assets/loading1/background1.png")}>

              
        <Image style={{transform:[{rotate: '1 deg'}], alignSelf:'center'}}
             source={require("../../assets/loading1/logo2.png")}>
                </Image>
                
                <View>
        <Text style={{fontSize:25, color:"#FDB000", left:"28%",top:"30%",fontWeight:'500' }}> Welcome To, </Text>
        <Image 
        style={styles.emoji}
        source={require("../../assets/loading1/emoji1.png")}></Image>
        </View>

        <Text style={{color:"#fff",fontSize:16, marginLeft:"6%", fontWeight:'600'}}> The India's Fastest growing the Real-money Game </Text>
        
        <View>
        <Image 
        style={styles.login}
        source={require("../../assets/loading1/login.png")}></Image>
        <Text style={{color:"#fff", fontSize:20, marginLeft:"35%", marginTop:"-9%"}}>Log In / Sign Up</Text>
        </View>
    
        <View>
     <Bluebuttons>
    <Text style={{color:"#fff",marginTop:"-39%", textAlign:'center', fontSize:14, fontWeight:'700'}}>Enter Mobile Number</Text>
     
    
       
    <TextInput style={styles.enter}
        
     keyboardType='numeric'
     defaultValue='9526810981'
     maxLength={10}
     ></TextInput>
     <TouchableOpacity onPress={() => navigation.navigate("Otp")}>
     <Buttons>
      <Text style={{color:"#fff", fontWeight:'600', fontSize:16}}>LOGIN</Text>
     </Buttons>
     </TouchableOpacity>

     {/* 
      <Text style={{alignContent:'center',color:"#fff", fontWeight:'500', fontSize:19}}> LOGIN</Text>   
      </Buttons>
     </TouchableOpacity> */}
{/*  
      <Text style={{alignContent:'center',color:"#fff", fontWeight:'500', fontSize:19}}> LOGIN</Text>   
      </Buttons>
      </TouchableOpacity> */}

</Bluebuttons>
        </View>
                </ImageBackground>
           </ImageBackground>
           </View>
);
}


const styles= StyleSheet.create({
  frame:{
      height:"100%",
      width:"100%"
  },
  image:{
    height:"100%",
    width:"100%"
  },
  Logo2:{
    left:"32%",
    marginTop:'7%'
  },
  emoji:{
    left:"68%",
    top:"-16%",
    height:25,
  },
  login:{
    left:"28%",
    top:"17%"
  },
  rectangle:{
  width:"90%",
  height:"75%",
  marginLeft:"5%",
  marginTop:"0.8%",
  borderRadius:30
  
  },

  textinput:{
    position:"absolute",
   marginLeft:"22%",
   marginTop:"8%"
  },
  enter:{
    height:30,
    width:210,
    alignSelf:'center',
    marginTop:"5%",
    backgroundColor:"#090C5B",
    borderColor:"#00C4FF",
    borderWidth:1.5,
    borderRadius:8,
    color:"#fff",
    textAlign:'center',
    fontSize:18

  },
  textFailed:{
    color:"#fff",
    fontSize:15,
    marginLeft:"54%"
  },
  loginButton:{
    marginLeft:"28%",
    marginTop:"4%",
    height:40
  },
  people:{
   marginLeft:'15%',
   marginTop:"10%"
  },

  dice:{
    marginLeft:'36%',
   marginTop:"-11%"
  },
  phone:{
    marginLeft:'55%',
   marginTop:"-13%"
  },
  sub:{
    marginLeft:"75%",
    marginTop:"-9%"
  }

})

