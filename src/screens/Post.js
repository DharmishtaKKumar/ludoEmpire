import React from 'react';
import {
    Animated,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const CARD_GUTTER_VERTICAL = 16;
const CARD_GUTTER_HORIZONTAL = 8;
const CARD_WIDTH = DEVICE_WIDTH - 32;
const SCROLL_INTERVAL = CARD_WIDTH + CARD_GUTTER_HORIZONTAL;

export default class Post extends React.Component {
    render() {
        return (
            <View style={[style.container, {height: this.props.height}]}>
                <ScrollView
                  horizontal
                  style={style.scrollContainer}
                  contentContainerStyle={style.contentContainer}
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={SCROLL_INTERVAL}
                  decelerationRate="fast">

                    {/* This is our main title card */}
                    <View style={style.card}>
                        <Image
                          style={style.image}
                          width={CARD_WIDTH}
                          height={this.props.height-52}
                          source={{uri: 'https://picsum.photos/'+ CARD_WIDTH*2 +'/'+ this.props.height*1.5 +'/?gravity=center&image='+ Math.round(Math.random()*999)}}
                        />
                        <Text style={style.text}>{this.props.title}</Text>
                    </View>

                    {/* And this is our one and only comment */}
                    <View style={style.card}>
                        <Text style={style.text}>{this.props.comment}</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        marginVertical: CARD_GUTTER_VERTICAL/2,
    },

    scrollContainer: {
        overflow: 'visible'
    },

    contentContainer: {
        paddingHorizontal: 12,
    },

    overlay: {
        opacity: 0,
        backgroundColor: 'green',
        position: 'absolute',
        width: DEVICE_WIDTH,
        height: 99999,
        top: -99999/2,
        left: 0,
    },

    card: {
        marginHorizontal: CARD_GUTTER_HORIZONTAL/2,
        borderRadius: 16,
        width: CARD_WIDTH,
        backgroundColor: 'blue',
        overflow: 'hidden'
    },

    image: {
        resizeMode: 'cover',
        backgroundColor: '#ddd'
    },

    text: {
        marginVertical: 12,
        marginHorizontal: 16,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600'
    }
});