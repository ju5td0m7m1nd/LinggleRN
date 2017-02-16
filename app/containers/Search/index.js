'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image, TextInput, Dimensions, Animated, TouchableHighlight} from 'react-native';
import * as Progress from 'react-native-progress';
import {search, reset} from './actions';

import GoogleAnalytics from 'react-native-google-analytics-bridge';
GoogleAnalytics.setTrackerId('UA-92104872-1')

import Icon from 'react-native-vector-icons/Ionicons';
import ResultContainer from './ResultContainer'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  inputContainer: {
    zIndex: 2,
    backgroundColor: 'white',
    position: 'absolute',
    height: 48,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#222',
    flexDirection: 'row',
  },
  input: {
    flex: 9,
    padding: 16
  },
  linggleLogo: {
    zIndex: 2,
    position: 'absolute',
    width: screenWidth * 0.5,
    height: screenWidth * 0.5 * (128 / 325),
    left: screenWidth * 0.25,
  },
  loading: {
    position: 'absolute',
    top: screenHeight * 0.4,
    left: screenWidth * 0.5 - 24,
  }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: new Animated.Value(0),
      query: '',
    };
  }

  componentDidMount() {
    GoogleAnalytics.trackEvent('route', 'search');
  }

  inputFocus = () => {
    Animated.timing(
      this.state.expand,
      {toValue: 1}
    ).start();
  }

  inputBlur = () => {
    this.setState({query: ''})
    Animated.timing(
      this.state.expand,
      {toValue: 0}
    ).start();
  }

  inputChange = (e) => {
    this.setState({query: e.nativeEvent.text})
  }

  sendQuery = () => {
    GoogleAnalytics.trackEvent('search', 'query', {label: JSON.stringify(this.state.query)});
    this.props.dispatch(search(this.state.query))
  }

  resetQuery = () => {
    this.props.dispatch(reset())
    this.inputBlur()
  }

  handleKeyDown = (e) => {
    if (e.nativeEvent.key === "Enter") {
      this.sendQuery()
    }
  }

  render() {
    const {isLoading, answers} = this.props;
    return (
      <View style={styles.container}>
        {
          isLoading ?
            <Animated.View style={styles.loading}>
              <Progress.Circle size={48} indeterminate={true} color='#CC0000'/>
            </Animated.View> : null
        }
        <TouchableHighlight
          style={{
            width: screenWidth,
            height: screenHeight,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onPress={this.resetQuery}
          underlayColor='transparent'
        >
          <Text/>
        </TouchableHighlight>
        <Animated.Image
          source={require('../../assets/linggle-logo.png')}
          style={[styles.linggleLogo, {
            top: this.state.expand.interpolate({
              inputRange: [0, 1],
              outputRange: [screenHeight * 0.25, screenHeight * -0.35],
            })
          }]}
        />
        <Animated.View style={[styles.inputContainer, {
          top: this.state.expand.interpolate({
            inputRange: [0, 1],
            outputRange: [screenHeight * 0.4, 20],
          }),
          left: this.state.expand.interpolate({
            inputRange: [0, 1],
            outputRange: [screenWidth * 0.1, 0],
          }),
          width: this.state.expand.interpolate({
            inputRange: [0, 1],
            outputRange: [screenWidth * 0.8, screenWidth],
          }),
          shadowOpacity: this.state.expand.interpolate({
            inputRange: [0, 1],
            outputRange: [0.4, 0.1],
          }),
        }]}
        >
          <TextInput
            style={styles.input}
            value={this.state.query}
            placeholder='How to describe weather'
            placeholderTextColor="#B0B0B0"
            keyboardType='web-search'
            onFocus={this.inputFocus}
            onKeyPress={this.handleKeyDown}
            onChange={this.inputChange}
          />
          <Animated.View
            style={{
              flex: this.state.expand.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: this.state.expand.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}
          >
            <TouchableHighlight
              onPress={this.resetQuery}
              underlayColor='transparent'
            >
              <Icon
                size={48}
                name='ios-close-outline'
                color='#222'
              />
            </TouchableHighlight>
          </Animated.View>
        </Animated.View>
        {
          answers.valid ? <ResultContainer data={answers.data} /> : null
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.search.isLoading,
  done: state.search.done,
  answers: state.search.answers,
})

export default connect(mapStateToProps)(Search);
