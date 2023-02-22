import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  
  indexSelected
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('../../assets/Main/mourya.png'),
  image2: require('../../assets/Main/pala.png'),
  image3: require('../../assets/Main/vijayanagar.png'),
  image4: require('../../assets/Main/maratha.png'),
  image5: require('../../assets/Main/mughal.png'),
  image6: require('../../assets/Main/chalukya.png'),
  image7: require('../../assets/Main/gupta.png'),
  image8: require('../../assets/Main/shatavahana.png'),
  image9: require('../../assets/Main/kushan.png')
};

const Mouryaeg = () => {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 },
    { id: '7', image: IMAGES.image7 },
    { id: '8', image: IMAGES.image7 },
    { id: '9', image: IMAGES.image7 }
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          marginTop: 50,
          marginBottom: 25
        }}
      >
        Custom Gallery
      </Text>
      {/* Carousel View */}
      {/* Thumbnail component using FlatList */}
      <View>
  {/* Carousel Component code remains same */}
  {/* <Pagination
    inactiveDotColor='gray'
    dotColor={'orange'}
    activeDotIndex={indexSelected}
    dotsLength={images.length}
    animatedDuration={150}
    inactiveDotScale={1}
  /> */}
</View>
    </View>
  );
};

export default Mouryaeg;