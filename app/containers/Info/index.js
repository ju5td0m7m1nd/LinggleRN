'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image, Animated} from 'react-native';
import {route} from '../App/actions';
import GoogleAnalytics from 'react-native-google-analytics-bridge';
GoogleAnalytics.setTrackerId('UA-92104872-1')


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    marginTop: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222'
  },
  contentContainer: {
    flex: 7,
    padding: 16,
    paddingLeft: 48,
    paddingRight: 48,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginTop: 16,
    width: 72,
    height: 72,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    lineHeight: 24,
    marginTop: 8,
    textAlign: 'justify',
  }
});

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0)
    }
  }

  componentDidMount() {
    GoogleAnalytics.trackEvent('route', 'info');
    Animated.timing(
      this.state.fadeIn,
      {toValue: 1}
    ).start();
  }

  render() {
    const {path, dispatch} = this.props;
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.iconContainer, {
          marginLeft: this.state.fadeIn.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0],
          }),
          opacity: this.state.fadeIn.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
        }]}>
          <Image
            style={styles.icon}
            source={require('../../assets/logo.png')}
          />
        </Animated.View>
        <Animated.View style={[styles.contentContainer, {
          opacity: this.state.fadeIn.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }]}>
          <Text
            style={styles.title}
          >關於我們 | About Us</Text>
          <Text
            style={styles.content}
          >
            {"    清華大學資訊工程系自然語言系統實驗室成立於1988年，進行各項自然語言相關軟體技術的研發。"}
            {"主要的研究項目包含電腦輔助語言學習、文字校對、資訊檢索系統及機器翻譯系統。"}
          </Text>
          <Text
            style={styles.content}
          >
            {"Our lab was established in 1988, researching and developing different NLP-related projects. Our main areas of research include computer-assisted language learning, word alignment, information retrieval, and machine translation."}</Text>
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  path: state.app.path,
})

export default connect(mapStateToProps)(Info);
