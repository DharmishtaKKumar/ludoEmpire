import react,{useRef, useEffect} from "react";
import {View, StyleSheet, Text, Image, style,Animated, TouchableOpacity, ImageBackground} from "react-native";


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current 
    useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 10000,
            useNativeDriver:true,
          }
        ).start();
      }, [fadeAnim])
    
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
    }
    
export default function Loading({navigation}) {

    return(
        <View>
         
         <TouchableOpacity on onPress={() => navigation.navigate("Loading1")}>
        <ImageBackground
        style={styles.frame}
         source={require("../../assets/loading1/frame.png")}>

            <ImageBackground 
style={styles.image}
source={require("../../assets/loading1/background1.png")}>
     

<FadeInView>
    <Image
     source={require("../../assets/loading1/logo3.png")} 
     style={styles.logo}/>
       
      </FadeInView>

       </ImageBackground>
       </ImageBackground>
       </TouchableOpacity>
        </View>

    );

}

const styles=StyleSheet.create({
    frameS: {
        height:"100%",
        width:"100%"
    },
    image: {
        height:"100%",
        width:"100%"
    },
    logo:{
        width:"83%",
        height:"46%",
        marginTop:"55%",
        marginLeft:"10.5%"
       
    }
  
})


