import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'native-base';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import logoImg from '../images/game_plan_logo.png';

export default class Logo extends Component {
  render() {
    return (
        <Container>
        <Header />
        <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
        </Grid>
      </Container>
    //     <View style={styles.container}>
    //     <Image source={logoImg} style={styles.image} />
    //     <Text style={styles.text}>REACT NATIVE</Text>
    //   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    zIndex:9999
  },
});