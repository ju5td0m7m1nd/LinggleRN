'use strict'
/**
 * Created by caimingxun on 2016/12/3.
 */

import { combineReducers } from 'redux';
import app from '../containers/App/reducer';
import search from '../containers/Search/reducer';

export default combineReducers({
  app,
  search,
});