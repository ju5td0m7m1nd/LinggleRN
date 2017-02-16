/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import configureStore from './app/core/store';
import {Provider} from 'react-redux';
import App from './app/containers/App';

const store = configureStore();

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LinggleRN extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('LinggleRN', () => LinggleRN);
