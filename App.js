import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

// import Loading from './src/screens/Loading';
// import Loading1 from "./src/screens/Loading1";
// import Loading2 from './src/screens/Loading2';
//  import Language from './src/screens/Language';
// import EnterNum from './src/screens/EnterNum';
// import Main from './src/screens/Main';
// import Otp from './src/screens/Otp';
// import Mourya from './src/screens/Mourya';
// import Classic from './src/screens/Classic';
// import Tournament from './src/screens/Tournament';


// import Settings from './src/screens/Settings';
// import Helpdesk from './src/screens/Helpdesk';
// import Aboutus from './src/screens/Aboutus';
// import Privacy from './src/screens/Privacy';
// import Terms from './src/screens/Terms';
// import Refund from './src/screens/Refund';
// import Profile from './src/screens/Profile';
// import Entername from './src/screens/Entername';
// import Mailid from './src/screens/Mailid';
// import Kyc from './src/screens/Kyc';
// import Gamehistory from './src/screens/Gamehistory';
// import Referralhistory from './src/screens/Referralhistory';
// import Howtoplay from './src/screens/Howtoplay';
// import Howtoclassic from './src/screens/Howtoclassic';
// import Howtoquick from './src/screens/Howtoquick';
// import Howtotournament from './src/screens/Howtotournament';
// import Mouryaeg from './src/screens/Mouryaeg';



// import Maineg from './src/screens/Maineg';
// import Toggle from './src/screens/Toggle';
// import Carousel from './src/screens/Carousel';
// import Carouselnew from './src/screens/Carouselnew';
// import Carousel2 from './src/screens/Carousel2';
// import Abcdef from './src/screens/Abcdef';
// import namesof from './src/screens/namesof';
import Carouselnew from './src/screens/Carouselnew';









const Stack = createStackNavigator();

const App = () => {

  // const [Loaded] = useFonts({
  //    Roboto: require("./assets/fonts/Roboto-Regular.ttf")
  // });

  // if(!Loaded) return null;


  return (
    <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}} />
         <Stack.Screen name="Loading1" component={Loading1} options={{headerShown: false}} />
          <Stack.Screen name="Loading2" component={Loading2} options={{headerShown: false}} />  
           <Stack.Screen name="Language" component={Language} options={{headerShown: false}} /> 
         <Stack.Screen name="EnterNum" component={EnterNum} options={{headerShown: false}} />
          <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
         <Stack.Screen name="Otp" component={Otp}  options={{headerShown: false}}/> 
           <Stack.Screen name="Mourya" component={Mourya}  options={{headerShown: false}}/>     
            <Stack.Screen name="Classic" component={Classic}  options={{headerShown: false}}/>   
            <Stack.Screen name="Tournament" component={Tournament} options={{headerShown: false}} />

           <Stack.Screen name="Settings" component={Settings}  options={{headerShown: false}}/>  
          <Stack.Screen name="Helpdesk" component={Helpdesk} options={{headerShown: false}} />
          <Stack.Screen name="Aboutus" component={Aboutus} options={{headerShown: false}} />
          <Stack.Screen name="Privacy" component={Privacy} options={{headerShown: false}} />
          <Stack.Screen name="Terms" component={Terms} options={{headerShown: false}} />
          <Stack.Screen name="Refund" component={Refund} options={{headerShown: false}} /> 
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
         <Stack.Screen name="Entername" component={Entername} options={{headerShown: false}} />
          <Stack.Screen name="Mailid" component={Mailid} options={{headerShown: false}} />
          <Stack.Screen name="Kyc" component={Kyc} options={{headerShown: false}} />
          <Stack.Screen name="Gamehistory" component={Gamehistory} options={{headerShown: false}} />
          <Stack.Screen name="Referralhistory" component={Referralhistory} options={{headerShown: false}} /> 
          <Stack.Screen name="Howtoplay" component= {Howtoplay} options={{headerShown: false}}/> 
          <Stack.Screen name="Howtoclassic" component={Howtoclassic} options={{headerShown: false}} />
          <Stack.Screen name="Howtoquick" component={Howtoquick} options={{headerShown: false}} />
          <Stack.Screen name="Howtotournament" component={Howtotournament} options={{headerShown: false}} />
         */}

     
{/*          
            <Stack.Screen name="Maineg" component={Maineg} options={{headerShown: false}} /> */}
           {/* <Stack.Screen name="Toggle" component={Toggle} options={{headerShown: false}} /> */}
           {/* <Stack.Screen name="Mouryaeg" component={Mouryaeg} options={{headerShown: false}} />
          */}

{/* <Stack.Screen name="Carousel" component={Carousel} options={{headerShown: false}} /> */}
        <Stack.Screen name="Carouselnew" component={Carouselnew} options={{headerShown:false}} /> 
        {/* <Stack.Screen name="Carousel2" component={Carousel2} options={{headerShown:false}} />
        {/* <Stack.Screen name="Abcdef" component={Abcdef} options={{headerShown:false}} />          
      */}

      {/* <Stack.Screen name="namesof" component={namesof} options={{headerShown: false}}/> */}

       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
  