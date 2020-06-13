/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainScreen from './src/components/MainScreen'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/components/LoginScreen';

const App: () => React$Node = () => {
  // useEffect(()=>{
  //   SplashScreen.hide();
  // },[]);
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      {/* <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	       
	      </Scene>
	    </Router> */}
      <MainScreen></MainScreen>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
