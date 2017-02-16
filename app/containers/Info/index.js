'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import { route } from '../App/actions';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 32,
    height: 32,
  }
});

class Info extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { path, dispatch } = this.props;
    return (
      <View style={styles.container}>
        <Text>Info</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  path: state.app.path,
})

export default connect(mapStateToProps)(Info);
