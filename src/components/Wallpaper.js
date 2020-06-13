import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import {StyleSheet, Image} from 'react-native';

import bgSrc from '../images/loginbgimage_mobile.png';
import { View } from 'native-base';

export default class Wallpaper extends Component {
  render() {
    return (
      <View>

      <Image style={styles.picture} source={bgSrc}>
            </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    zIndex:1
  },
});