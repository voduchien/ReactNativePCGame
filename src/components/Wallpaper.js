import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'dimensions';
import {StyleSheet, Image} from 'react-native';

import bgSrc from '../images/loginbgimage_mobile.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <Image style={styles.picture} source={bgSrc}>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});