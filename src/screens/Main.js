import React from "react";
import { View, Text, styles,Modal,Pressable,navigation, Image, StyleSheet,Animated,Easing, TouchableOpacity, ImageBackground, ScrollView} from "react-native";


export default class Main extends React.Component {
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

      Carouselnew= () => {
        this.props.navigation.navigate('Carouselnew')
      }
    
      state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  settings= () => {
    this.props.navigation.navigate('Settings')
  }

  profile = () => {
    this.props.navigation.navigate('Profile')
  }

  tournament = () => {
    this.props.navigation.navigate('Tournament')
  }

      render(){
        const { modalVisible } = this.state;
    return(
        <View>
<ImageBackground
style={style.frame}
 source={require("../../assets/loading1/frame2.png")}>


<ImageBackground 
style={style.image}
source={require("../../assets/loading1/background1.png")}>

<View>
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

<Animated.Image
            style={{
                height:110,
                width:110,
                marginTop:"-13%",
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
                height:100,
              width:100,
              alignSelf:"center",
              marginTop:"-26%",
              marginBottom:"10%",
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
          style={style.logo}
          source={require("../../assets/loading1/logo.png")}/>

<View>
<TouchableOpacity>
 <Image 
style={style.howtoplay}
source={require("../../assets/Main/howtoplay.png")}/>
</TouchableOpacity>
<Text style={{color:'#fff', fontSize:8, fontWeight:'500',marginLeft:'70%', marginTop:'-24%'}}>HOW TO PLAY</Text>

<TouchableOpacity on onPress={this.profile}>
<Image 
style={style.profile}
source={require("../../assets/Main/profile.png")}/>
</TouchableOpacity>
<Text style={{color:'#fff',fontSize:8,fontWeight:'500',  marginLeft:'87.5%', marginTop:'-2.5%'}}>PROFILE</Text>
</View>



<View>
<ImageBackground 
style={style.lakhpathi}
source={require("../../assets/Main/lakhpathi.png")}>
<Text style={{color:'#fff',fontSize:10,fontWeight:'bold', marginLeft:'18%',marginRight:'20%', marginTop:'3%', textAlign:'center'}}>LAKHPATI TOURNAMENT</Text>
<TouchableOpacity>
    <Text style={style.join}>JOIN</Text>
</TouchableOpacity>
</ImageBackground>
</View>




<View>
<ImageBackground 
style={style.tips}
source={require("../../assets/Main/tips.png")}>
<Text style={{color:'#fff',fontSize:10,fontWeight:'bold', marginLeft:'18%',marginRight:'20%', marginTop:'3%',  textAlign:'center'}}>TIPS AND TRICKS TO WIN</Text>
<TouchableOpacity>
    <Text style={style.join}>JOIN</Text>
</TouchableOpacity></ImageBackground>
</View>


<View>
<ImageBackground 
style={style.crorepathi}
source={require("../../assets/Main/crorepathi.png")}>
<Text style={{color:'#fff',fontSize:10,fontWeight:'bold',marginLeft:'18%',marginRight:'20%', marginTop:'3%',  textAlign:'center'}}>CROREPATI TOURNAMENT</Text>
<TouchableOpacity>
    <Text style={style.join}>JOIN</Text>
</TouchableOpacity></ImageBackground>
</View>


<ImageBackground
 style={style.topplayers}
 source={require("../../assets/Main/topplayers.png")}>
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            flex: 1,
        }}
  >
    <Text style={{color:'#fff',fontSize:10, fontWeight:'600', flexDirection:'row',textAlign:'left'}}>RAVI WITHDRAWN Rs.1200    | MIDHUN WITHDRAWN Rs.1200  | ARJUN WITHDRAWN Rs.1200  |  AKSHARA WITHDRAWN Rs.1200   |  AJAY WITHDRAWN Rs.1200 </Text>
    </ScrollView>
 </ImageBackground>




<Image 
style={style.leftman}
source={require("../../assets/Main/leftman.png")}></Image>




<Image 
style={style.rightman}
source={require("../../assets/Main/rightman.png")}></Image>

<Image 
style={style.bluebox}
source={require("../../assets/Main/bluebox.png")}></Image>
<Image 
style={style.arch}
source={require("../../assets/Main/arch.png")}></Image>

<View>
<Image
style={style.onlineplayers}
source={require("../../assets/Main/onlineplayers.png")}/>
<Text  style={{color:'#fff',fontSize:7,fontWeight:"800", marginTop:'-6%', marginLeft:"39.7%"}}>ONLINE PLAYERS : 1234</Text>

</View>

<View>

<TouchableOpacity on onPress={this.Carouselnew} >
    <View>
<Image
style={style.classic}
source={require("../../assets/Main/classic.png")}/>
<Text style={{color:'#fff',fontSize:10,fontWeight:"900", marginLeft:"45%", marginTop:"-17%", marginLeft:"42%", marginRight:"42%", textAlign:'center'}}>CLASSIC LUDO</Text>
<Text  style={{color:'#fff',fontSize:8,fontWeight:"700", marginLeft:"45%", marginTop:"1%", marginLeft:"0%", textAlign:'center'}}>Take 4 Gotis Home</Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
    <View>
<Image
style={style.quick}
source={require("../../assets/Main/quick.png")}/>
<Text style={{color:'#fff',fontSize:10,fontWeight:"900", marginLeft:"45%", marginTop:"-17%", marginLeft:"45%", marginRight:"45%", textAlign:'center'}}>QUICK LUDO</Text>
<Text  style={{color:'#fff',fontSize:8,fontWeight:"700", marginLeft:"45%", marginTop:"1%", marginLeft:"0%", textAlign:'center'}}>Take 2 Gotis Home</Text>
</View>
</TouchableOpacity>

<TouchableOpacity on onPress={this.tournament}>
<View>
<Image
style={style.tournament}
source={require("../../assets/Main/tournament.png")}/>
<Text style={{color:'#fff',fontSize:10,fontWeight:"900", marginLeft:"45%", marginTop:"-10%", marginLeft:"0%", textAlign:'center'}}>TOURNAMENT</Text>

</View>
</TouchableOpacity> 
    
</View>

<View>

    <TouchableOpacity>
<Image 
style={style.control}
source={require("../../assets/Main/control.png")}></Image>
<Text style={{color:'#fff',fontSize:9,fontWeight:"500", marginLeft:"0.5%", marginTop:"-11.4%", }}>CONTROLS</Text>

</TouchableOpacity>
</View>
<View>






<View>
 <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            
<Image 
style={style.games}
source={require("../../assets/Main/moregames.png")}></Image>
<Text style={{color:'#fff',fontSize:9,fontWeight:"500", marginLeft:"90%",marginRight:"1%",marginTop:"-6.5%",textAlign:'center' }}>MORE GAMES</Text>
</TouchableOpacity>

<Modal
          // animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          {/* <View style={styles.centeredView}> */}
            <View style={style.modalView}>
              <Image style={style.callbreak}
               source={require("../../assets/Main/callbreak.png")}/>
              <Image 
              style={style.quizempire}
               source={require("../../assets/Main/quizempire.png")}/>
              <Image 
              style={style.stock11}
               source={require("../../assets/Main/stock11.png")}/>

              <Pressable onPress={() => this.setModalVisible(!modalVisible)}>
            <Image 
            style={style.moregames1}
            source={require("../../assets/Main/moregames1.png")}></Image>
                
                <Text style= {{color:'#fff',fontSize:9,fontWeight:"500", marginLeft:"94%",marginRight:"-2%",marginTop:"-7%",textAlign:'center' }}>More Games1</Text>
              </Pressable>
            </View>
          {/* </View> */}
        </Modal>

        <Pressable   onPress={() => this.setModalVisible(true)}>
        <Image 
        style={[style.games, style.buttonOpen]}
        source={require("../../assets/Main/moregames.png")}></Image>
          <Text style={{color:'#fff',fontSize:9,fontWeight:"500", marginLeft:"90%",marginRight:"1%",marginTop:"-6.5%",textAlign:'center' }}>More Games</Text>
        </Pressable>
</View>
</View>

<Image 
style={style.fire}
source={require("../../assets/Main/fire.png")}></Image>

<Image 
style={style.rightfire}
source={require("../../assets/Main/fire.png")}></Image>


<View>
    <Image 
    style={style.bottombar}
    source={require("../../assets/Main/bottombar.png")}></Image>
    
</View>


<View>
    <TouchableOpacity on onPress={this.settings}>
    <Image 
    style={style.settings}
    source={require("../../assets/Main/settings.png")}></Image>
    <Text style={{color:'#fff',fontSize:10,fontWeight:"500", marginLeft:"8%", marginTop:"-10%"}}>SETTINGS</Text>
    </TouchableOpacity>
    </View>
    

  
    <View>
    <TouchableOpacity>
    <Image 
    style={style.leaderboard}
    source={require("../../assets/Main/leaderboard.png")}></Image>
    <Text style={{color:'#fff',fontSize:10,fontWeight:"500", marginLeft:"29%", marginTop:"-10%"}}>LEADERBOARD</Text>
    </TouchableOpacity>
    </View>
   

   
    <View>
    <TouchableOpacity>
    <Image 
    style={style.helpdesk}
    source={require("../../assets/Main/helpdesk.png")}></Image>
    <Text style={{color:'#fff',fontSize:10,fontWeight:"500", marginLeft:"57%", marginTop:"-10%"}}>HELPDESK</Text>
    </TouchableOpacity>
    </View>
  

 
    <View>
    <TouchableOpacity>
    <Image 
    style={style.referearn}
    source={require("../../assets/Main/referearn.png")}></Image>
    <Text style={{color:'#fff',fontSize:10,fontWeight:"500", marginLeft:"80%", marginTop:"-10%"}}>REFER & EARN</Text>
    </TouchableOpacity>
     </View>
   

</ImageBackground>
    </ImageBackground>

    </View>

    );
}
}


const style= StyleSheet.create({
    frame:{
        height:"100%",
        width:"100%",
       
    },
    image:{
        height:"100%",
        width:"100%",
       
    },
    moneyframe:{
        marginTop:'3%',
        marginLeft:'3%'
    },
    moneybox:{
        marginTop:'-7.1%',
        marginLeft:'10%'
    },
    plus:{
        marginLeft:'29.5%',
        marginTop:'-10%',
        
    },
    logo:{
        height:80,
        width:90,
        marginTop:"-31%",
        marginBottom:"10%",
        alignSelf:'center',
    },
    howtoplay:{
        marginLeft:'72%',
        marginTop:'-33.2%'
    },
    profile:{
        marginLeft:'88%',
        marginTop:'-11.8%'
    },
    lakhpathi:{
        marginLeft:'4%',
        marginTop:'-5%',
        height:59,
        width:120,
    },
    tips:{
        marginLeft:'36%',
        marginTop:'-14%',
        height:59,
        width:120,
    },
    crorepathi:{
        marginLeft:'68%',
        marginTop:'-14%',
        height:59,
        width:120,
    },
    join:{
        backgroundColor:'#fff',
        height:16,
        width:70,
        left:'19%',
        borderRadius:10,
        textAlign:'center',
        marginTop:'4%',
        fontSize:10,
        fontWeight:'600'

    },
    topplayers:{
        height:"1.5%",
        width:"100%"
    },
    control:{
       marginTop:"-96%",
       marginLeft:"-0.1%"
 
      
    },
    games:{
        marginTop:"-89%" ,
        marginLeft:"87.2%"  
    },
    moregames1:{
      marginTop:"-33.8%" ,
      marginLeft:"91.2%" ,
 
       
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
     
      height:"120%",
    },
    // buttonOpen: {
   
    // },
    
    leftman:{
        marginTop:"61%",
        marginLeft:"7%",
  
    },
   
    rightman:{
         marginTop:"-40%",
         marginLeft:"76%" 
    },
    bluebox:{
        marginTop:"-81%",
        marginLeft:"23%",
        height:"50%",
        width:"50%"
      },
      arch:{
        marginTop:"-100%",
        marginLeft:"20.5%",
        height:"59.5%",
        width:"58.5%"
         
      },
      fire:{
        marginTop:"-74%",
        marginLeft:"3%"
    },
    rightfire:{
        marginTop:"-28%",
        marginLeft:"75%"
    },
    bottombar:{
        marginTop:'46%',
        height:"22%",
        width:"101%",
        marginLeft:"-.5%"
    },
    onlineplayers:{
        marginTop:"-90%",
        marginLeft:"33%"
      },
      classic:{
        marginLeft:"36%",
        marginTop:'-81%'
    },
    quick:{
        marginLeft:"36%",
        marginTop:'-53%'
    },
    tournament:{
        marginLeft:"36%",
        marginTop:'-26%'
    },
    settings:{
        marginTop:"-34%", 
        marginLeft:"9%",
        marginBottom:"10%"
    },
    leaderboard:{
        marginTop:"-34%", 
        marginLeft:"33%",
        marginBottom:"10%"
    },
    helpdesk:{
        marginTop:"-34%", 
        marginLeft:"58%",
        marginBottom:"10%"
    },
    referearn:{
        marginTop:"-34%", 
        marginLeft:"83%",
        marginBottom:"10%"
    },
//     button: {
//     borderRadius: 20,
//     padding: 10,
//    
//   },

 
})
