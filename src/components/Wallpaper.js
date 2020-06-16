import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Container, Header, Content, Input, Item, Icon,Button,ListItem,CheckBox,Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import imgBackground from '../images/loginbgimage_mobile.png'
import imgLogo from '../images/game_plan_logo.png'
import imgLogoMobile from '../images/logo_mobile.png'
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const {width:WIDTH}=Dimensions.get('window');
const Background = ({ children }) => (
  <Container>
    <ImageBackground resizeMode='cover' source={imgBackground} style={{ flex: 1 }}>
  
      <Grid>
            <Row size={20}>
            
            </Row>
            <Row size={20}>
                <Row>
                  <Col size={60} style={{ backgroundColor: 'transparent', textAlign: 'left',paddingLeft:10 }}>
                    <Image source={imgLogoMobile} style={styles.logo} />
                    <Text style={{fontSize:16,paddingTop:30,paddingLeft:20}}>
                      Profile Login
                    </Text>
                    <Text style={{fontSize:10,paddingLeft:20}}>
                      enter your details below
                    </Text>
                  </Col>
                  <Col  size={40} style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={imgLogo} />
                  </Col>
                </Row>
            </Row>
            
            <Row size={20}>
              
                
              <KeyboardAvoidingView
        contentContainerStyle={{ flexGrow: 1 }} scrollEnabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                {/* <Icon name='user' type='FontAwesome' style={styles.inputIcon} color={'rgba(0,0,0,0.7)'}></Icon> */}
                <TextInput placeholder={'Email'} 
                placeholderTextColor={'rgba(0,0,0,0.7)'}
                underlineColorAndroid='transparent'
                style={styles.input}
                />
                
                <TextInput secureTextEntry={true}  placeholder={'Password'} 
                placeholderTextColor={'rgba(0,0,0,0.7)'}
                underlineColorAndroid='transparent'
                style={styles.inputpass}/>
            
              
            </View>
            
          
          </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
            </Row>
            <Row size={10} style={{minHeight:30,paddingLeft:20}}>
              
            <Col>
              <Text style={{minHeight:30,paddingTop:10,paddingLeft:5}}>Forget your password?</Text>
              </Col>
              <Col>
              <Content>
              <ListItem>
                <CheckBox checked={true} />
                <Body>
                  <Text>Remember me?</Text>
                </Body>
              </ListItem>
              </Content>
              </Col>
            
            </Row>
            <Row size={10}>
              <Col size={8}></Col>
              <Col size={84}>
              
            <Button block style={{backgroundColor:'#207fc4'}}>
                  <Text style={{color:'#ffffff',fontWeight:'bold'}}>Sign in</Text>
                </Button>
              </Col>
              <Col size={8}></Col>
            </Row>
            <Row size={30}>
              
            </Row>
          </Grid>
           
          </ImageBackground> 

  </Container>
 
);

const styles = StyleSheet.create({
      background: {
      flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width:145,
    height: 45
  },
  container: {
      flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
      width: '30%', // is 50% of container width
    backgroundColor: 'powderblue'
  },
  input:{
    width:WIDTH-55,
    height:45,
    borderRadius:5,
    fontSize:16,
    paddingLeft:20,
    backgroundColor:'rgba(255,255,255,1)',
    color:'rgba(0,0,0,0.7)',
    marginHorizontal:25
  },
  inputpass:{
    width:WIDTH-55,
    height:45,
    borderRadius:5,
    fontSize:16,
    paddingLeft:20,
    marginTop:10,
    backgroundColor:'rgba(255,255,255,1)',
    color:'rgba(0,0,0,0.7)',
    marginHorizontal:25
  },
  inputIcon:{
    position:'absolute'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
});

export default memo(Background);
