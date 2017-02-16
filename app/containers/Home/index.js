'use strict'
/**
 * Created by caimingxun on 2016/12/3.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Search from '../Search';
import Info from '../Info';
import DefaultTabBar from './DefaultTabBar';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 32,
    height: 32,
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'search'
    }
  }

  componentDidMount() {

  }

  getInfo = (active) => {
    return active ? require('../../assets/info.png') : require('../../assets/info_disable.png');
  }
  getSearch = (active) => {
    return active ? require('../../assets/search.png') : require('../../assets/search_disable.png');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView tabBarPosition='bottom' renderTabBar={
          () => <DefaultTabBar/>
        }>
          <Search tabLabel="search" />
          <Info tabLabel="info" />
        </ScrollableTabView>
      </View>
    );
  }
}


export default connect()(Home);
