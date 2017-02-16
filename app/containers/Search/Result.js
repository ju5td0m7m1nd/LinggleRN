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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  },
  sentence: {
    fontWeight: 'bold',
    flex: 5
  },
  count: {
    flex: 3
  },
  percentage: {
    flex: 2,
  }
});

export default class Result extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {phrase, count, percentage, title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.sentence, {color: title ? '#CC0000' : '#000',
          paddingTop: title ? 16 : 8,
          paddingBottom: title ? 16 : 8,
        }]}>
          {phrase.reduce((pre, cur) => pre.concat(`${cur} `), '')}
        </Text>
        <Text style={[styles.count, {color: title ? '#CC0000' : '#000',
          paddingTop: title ? 16 : 8,
          paddingBottom: title ? 16 : 8,
        }]}>
          {count}
        </Text>
        <Text style={[styles.percentage, {color: title ? '#CC0000' : '#000',
          paddingTop: title ? 16 : 8,
          paddingBottom: title ? 16 : 8,
        }]}>
          {percentage}
        </Text>
      </View>
    )
  }
}