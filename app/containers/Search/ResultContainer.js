'use strict'
/**
 * Created by caimingxun on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';
import {
  Text, View,
  StyleSheet, Image, TextInput, Dimensions, Animated, TouchableHighlight,
  ScrollView,
} from 'react-native';
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
    this.state = {
      fadeIn: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeIn,
      {toValue: 1}
    ).start();
  }

  componentWillUnmount() {
    Animated.timing(
      this.state.fadeIn,
      {toValue: 0}
    ).start();
  }

  render() {
    const {data, fail} = this.props;
    return (
      <Animated.View
        style={[styles.container, {
          top: this.state.fadeIn.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 100],
          }),
          opacity: this.state.fadeIn.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Result
            title
            phrase={['Result']}
            count='Count'
            percentage='Percent'
          />
          {
            data.map(
              (item, key) => <Result key={key} phrase={item.phrase} count={item.count} percentage={item.percent}/>
            )
          }
        </ScrollView>
      </Animated.View>
    )
  }
}