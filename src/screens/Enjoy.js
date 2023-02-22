import React, {Component} from 'react';
import {View, Animated, Text} from "react-native";

export default class Enjoy extends Component {
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
      duration:3000,
      useNativeDriver:true
    }). start();
  }
  render() {
    return(
      <View style={styles.container}>
        <Animated.View 
        style={[
          styles.inner,
          {width:`${this.state.percent}%`}

        ]}
        />
        <Animated.Text style={styles.label}>
          {`${this.state.percent}%`}
        </Animated.Text>
      </View>
    );
  }
}

const styles={
  container:{
    width:"100%",
    height:40,
  padding:3,
  borderColor:"#aaa",
  borderWidth:3,
  borderRadius:20,
  justifyContent:'center'
  },
  inner:{
    width:18,
    height:30,
    borderRadius:15,
    backgroundColor:'red',
  },
  lebel:{
    fontSize:18,
    color:'#fff',
    position:'absolute',
    zIndex:1,
    alignSelf:'center',
  }
}