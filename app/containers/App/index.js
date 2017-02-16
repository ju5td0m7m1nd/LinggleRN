'use strict'
/**
 * Created by caimingxun on 2016/12/3.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Search from '../Search'
import Info from '../Info'
import Home from '../Home';

const mainScene = {
  duration: 100,
  panHandlers: null,
  hideNavBar: true,
};

const detailScene = {
  duration: 300,
  direction: 'vertical',
  hideNavBar: true,
};

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }
  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" {...mainScene} component={Home} />
        </Scene>
      </Router>
    )
  }
}

export default connect()(App);
