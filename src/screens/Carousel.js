import React, { Component } from 'react';
import { Text, View, StyleSheet ,styles,Dimensions, TouchableOpacity, Image, ImageBackground} from 'react-native';
;
import Button120 from '../Components/Button120';
// You can import from local files

import AppIntroSlider from 'react-native-app-intro-slider';
import Carouselbg from '../Components/Carouselbg';
import Carouselplaybutton from '../Components/Carouselplaybutton';


// export const SLIDER_WIDTH =Dimensions.get('window').width +30;
// or any pure javascript modules available in npm

const slides = [
  {
    ImageBackground : require('../../assets/Main/mourya.png'),
  },
  {
    ImageBackground : require('../../assets/Main/pala.png'),
  },
  {
    ImageBackground :require("../../assets/Main/vijayanagar.png"),
  },
  {
    ImageBackground :    require("../../assets/Main/maratha.png"),
  },
  {
    ImageBackground : require("../../assets/Main/mughal.png"),
  },
  {
    ImageBackground :  require("../../assets/Main/chalukya.png"),
  },
  {
    ImageBackground :   require("../../assets/Main/gupta.png"),
  },
  {
    ImageBackground :require("../../assets/Main/shatavahana.png"),
  },
  {
    ImageBackground :   require("../../assets/Main/kushan.png")
  },


];


export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  
    _renderItem = ({ item }) => {
    return (
      <View >
        {/* <Text >{item.title}</Text> */}
        <Carouselbg>
        <ImageBackground source={item.ImageBackground}
          style={style.screens} >
        {/* <Text>{item.text}</Text> */}
        <View>
         <Image 
         style={style.classicblue}
         source={require("../../assets/Main/classicblue.png")}/>
         <Text style={{color:"#fff", fontSize:17,fontWeight:'700', textAlign:'center', marginTop:"-18%"}}>CLASSIC LUDO</Text>
         <Text style={{color:"#fff", fontWeight:'600',fontSize:7, textAlign:'center'}}> IN CLASSIC LUDO, </Text>
         <Text style={{color:"#fff", fontWeight:'600',fontSize:7, textAlign:'center'}}> TAKE ALL 4 GOTIS/PAWNS HOME</Text>
         </View>

         <Image 
         style={style.leftfire}
         source={require("../../assets/Main/fireludo.png")}/>
         
         <View>
         <Image 
         style={style.winningamount}
         source={require("../../assets/Main/winningamount.png")}/>
         <Text style={{color:'#fff', fontWeight:'800', fontSize:8, textAlign:'center', marginTop:"-30%"}}>WINNING AMOUNT</Text>
         </View>

         <Image 
         style={style.rightfire}
         source={require("../../assets/Main/fireludo.png")}/>

         <Text style={{color:'#fff', fontWeight:'700', fontSize:8, textAlign:'center', marginTop:"6%"}}> SELECT ENTRY AMOUNT </Text>

         <View style={{flexDirection:'column', flex:6,marginTop:'5%', justifyContent:"space-between", marginLeft:'5%', marginRight:'5%'}}>
            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%",}}>
                 <View>
                    <TouchableOpacity>
                    <ImageBackground
                    style={style.rupee1}>
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
                   style={style.rupee1}>
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
                     style={style.rupee1}>
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
                     style={style.rupee1}>
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

            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%"}}>
                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                     style={style.rupee1}>
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
                     style={style.rupee1}>
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
                  style={style.rupee1}>
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
                    style={style.rupee1}>
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

            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginLeft:"10%", marginRight:"10%"}}>
                 <View>
                 <TouchableOpacity>
                    <ImageBackground
                    style={style.rupee1}>
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
                   style={style.rupee1}>
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
                    style={style.rupee1}>
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
                 style={style.rupee1}>
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

                           <View>
                             <Image 
                              style={style.yellowline}
                              source={require("../../assets/Main/yellowline.png")}/>
                           </View>

                           <Text style={{color:"#fff", fontWeight:'700',fontSize:12, textAlign:'center',marginTop:'2%',}}> SELECT TOKEN COLOUR</Text>
                           
                           <View style={{flexDirection:'row', flex:2,  justifyContent:'space-between',alignSelf:'center',marginTop:'5%', marginLeft:'25%', marginRight:'15%'}}>
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
        
        <TouchableOpacity>
         <Carouselplaybutton>
            <Text style={{color:"#fff", fontWeight:'600',fontSize:16}}>PLAY</Text>
         </Carouselplaybutton>
         </TouchableOpacity>

   

        
         </View>

        </ImageBackground>
        </Carouselbg>
      </View>
    );
  }

  // _renderNextButton = () => {
  // };
  // _renderDoneButton = () => {
  // };
  // _onDone = () => {
  //   this.setState({ showRealApp: true });
  // };
  // _onSkip = () => {
  //   this.setState({ showRealApp: true });
  // };

  render() {
    if (this.state.showRealApp) {
      return (
        <View>
          <Text>aaaaa</Text>
        </View>
      );
    } else {
      return (
        <AppIntroSlider 
        renderItem={this._renderItem} 
        data={slides} 
        // onDone={this._onDone}
        
        />
      );
    }
  }
}

const style=StyleSheet.create({
  screens:{
    position:'absolute',
    height:'94%',
    width:'98%',
    marginTop:'22%',
    alignSelf:'center',
    marginLeft:'45%', 
    // marginRight:'25%'
     
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
  marginTop:"-25%",
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
  marginTop:'-5%'

}

})


