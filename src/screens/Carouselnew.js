import * as React from 'react';
import { Text, View,styles,StyleSheet, SafeAreaView,TouchableOpacity, Image,ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Carouselbg from '../Components/Carouselbg';
import Carouselplaybutton from '../Components/Carouselplaybutton';

export default class Carouselnew extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            ImageBackground : require("../../assets/Main/mourya.png"),
              
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
        ]
      }
    }

    _renderItem({item}){
        return (
       

            <ImageBackground source={item.ImageBackground}
             style={style.screens}>

                <View>
                <ImageBackground
         style={style.classicblue}
         source={require("../../assets/Main/classicblue.png")}>
          <View style={{alignItems:'center',marginRight:'15%'}}>
         <Text style={{color:"#fff", fontSize:17,fontWeight:'700', marginTop:'2%'}}>CLASSIC LUDO</Text>
         <Text style={{color:"#fff", fontWeight:'600',fontSize:7, }}> IN CLASSIC LUDO, </Text>
         <Text style={{color:"#fff", fontWeight:'600',fontSize:7,}}> TAKE ALL 4 GOTIS/PAWNS HOME</Text>
         </View>
         </ImageBackground>
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
           
     

        //   <ImageBackground 
        //   source={require("../../assets/Main/mourya.png")}
        //    style={{
        //       backgroundColor:'lightgreen',
        //       borderRadius: 5,
        //       height: 250,
        //       padding: 50,
        //       marginLeft: 25,
        //       marginRight: 25, }}>
        //     <Text style={{fontSize: 30}}>{item.title}</Text>
           
        //     <Text>{item.text}</Text>
            
        //   </ImageBackground>

        )
    }

    render() {
        return (

            <SafeAreaView>
                <Carouselbg>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={315}
                  // sliderHeight={400}
                  itemWidth={350}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  
            </View>
            </Carouselbg>
          </SafeAreaView>
        //   <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 250, }}>
        //     <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
        //         <Carousel
        //           layout={"default"}
        //           ref={ref => this.carousel = ref}
        //           data={this.state.carouselItems}
        //           sliderWidth={300}
        //           itemWidth={300}
        //           renderItem={this._renderItem}
        //           onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  
        //     </View>
        //   </SafeAreaView>
        );
    }
}
const style=StyleSheet.create({
    screens:{
      position:'absolute',
      // marginLeft:'5%',
      height:'95%',

      marginTop:'15%',
      alignSelf:'center',
      // marginLeft:'15%', 
      // marginRight:'25%'
       
    },
    classicblue:{
      height:'48%',
      marginLeft:'12%',
      width:'85%',
      alignSelf:'center',
      marginTop:'-8%'
  },
  winningamount:{
    alignSelf:'center',
    marginTop:'-35%'

  
  },
  leftfire:{
    marginTop:"-38%",
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
    marginTop:'5%',
    marginLeft:'15%'
  
  }
  
  })
  
  