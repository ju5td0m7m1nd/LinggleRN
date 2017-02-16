'use strict'
/**
 * Created by caimingxun on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';
import {Text, View,
  StyleSheet, Image, TextInput, Dimensions, Animated, TouchableHighlight,
  ScrollView,} from 'react-native';
import Result from './Result';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: screenWidth * 0.05,
    width: screenWidth * 0.9,
    maxHeight: screenHeight * 0.7,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 0.4,
      height: 0.4,
    },
    shadowColor: '#222',
    shadowOpacity: 0.2,
  },
});

export default class ResultContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Animated.View
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Result
            title
            phase={['Result']}
            count='Count'
            percentage='Percent'
          />
        </ScrollView>
      </Animated.View>
    )
  }
}