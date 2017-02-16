'use strict'
/**
 * Created by caimingxun on 2016/12/3.
 */

import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';


export default function configureStore() {
  const enhancer = compose(
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
  );
  const store = createStore(reducer, enhancer);

  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }
  return store;
}
