import React from "react";
import {View, StyleSheet, style,Animated,  Easing, Text,Image, TouchableOpacity, ImageBackground} from "react-native";

export default class Loading2 extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rotateValueHolder: new Animated.Value(0)
  //   };
  // }
  // componentDidMount = () => {
  //   this.startImageRotateFunction();
  // }
  // startImageRotateFunction = () => {
  //   Animated.loop(Animated.timing(this.state.rotateValueHolder, {
  //     toValue: 1,
  //     duration: 3800,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   })).start();
  // };
  state = {
    percent : 0,
    
  }

  anim = new Animated.Value(0);

  componentDidMount() {
    this.onAnimate() ;
  }
  onAnimate = () => {
    this.anim.addListener(({value}) => {
      this.setState({percent: parseInt(value, 10)});
    });
    Animated.timing(this.anim, {
      toValue:100,
      duration:4000,
      useNativeDriver:true
    }). start();
  }
 


      render(){
        
  return (
        <View>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Language')}>
            <ImageBackground 
          style={styles.frame}
            source={require("../../assets/loading1/frame.png")}>

           


                <Image 
                style={styles.topFrame}
                source={require("../../assets/loading1/topFrame.png")}/>

 {/* <Animated.Image
            style={{
              width: 200,
              height: 200,
              alignSelf:"center",
              marginTop:"-58%",
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['1deg', '360deg'],
                        }
                      )
                  }
                ],
            }}
              source={require("../../assets/loading1/logobg.png")}
           
          />

<Animated.Image
            style={{
              width: 200,
              height: 200,
              alignSelf:"center",
              marginTop:"-48%",
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['1deg', '-360deg'],
                        }
                      )
                  }
                ],
            }}
              source={require("../../assets/loading1/logogoldbg.png")}
           
          />  */}

          

          <Image source={require("../../assets/loading1/logo.png")}
          style={styles.logo}/>
     
                <Image 
                style={styles.pawns}
                source={require("../../assets/loading1/pawns.png")}></Image>



                
  
           
                <View style={styles.container}>
        <Animated.View 
        style={[
          styles.inner,
     
          {width:`${this.state.percent}%`}

        ]}
        />
        <Animated.Text style={styles.label}>Loading.
          {`${this.state.percent}%`}
        </Animated.Text>
      </View>
             
<View>
         <Image 
         source={require("../../assets/loading1/fabzen.png")}
         style={styles.fabzen}/>
         <Text style={{color:"#fff", marginTop:"1%", textAlign:'center'}}>© Fabzen Technologies Pvt Ltd </Text>
         </View>

            </ImageBackground>
         

            </TouchableOpacity>
        </View>
    );
    }
}

const styles=StyleSheet.create({
    frame: {
        height:"100%",
        width:"100%"
    },
    image:{
        height:"100%",
        width:"100%"
    },
    topFrame:{
        height:"50%",
        width:'100%'
    },
    logo:{
       alignSelf:'center',
        marginTop: "-40.63%",
        height:123,
        width:150
      
    },
    pawns:{
        marginTop:"7%",
        marginLeft:"30%"
    },
    loading:{
        marginLeft:"23%",
        marginTop:"15%"
      
    },
    fabzen:{
            height:"16%",
            width:"9%",
            marginLeft:"47%",
            marginTop:"16%"
         
        
    },
    container:{
      width:"80%",
      height:"3%",
    padding:3,
    borderColor:'rgba(201, 120, 0, 0.3)',
    borderWidth:2,
    borderRadius:20,
    alignSelf:'center',
    marginTop:"35%"
 
    },
    inner:{
      width:18,
      height:"100%",
      borderRadius:15,
      backgroundColor: "red"
    },
    label:{
      fontSize:16,
      color:'#fff',
      marginTop:"-15%", 
      justifyContent:'space-between',
      alignSelf:'center'
 
    }
})