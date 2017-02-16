'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import {route} from '../App/actions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 7,
    padding: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginTop: 16,
    width: 132,
    height: 132,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    textAlign: 'justify',
  }
});

class Info extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const {path, dispatch} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.contentContainer}>
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
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  path: state.app.path,
})

export default connect(mapStateToProps)(Info);
