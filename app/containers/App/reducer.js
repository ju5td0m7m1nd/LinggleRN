'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */

import actionTypes from './actionTypes';
const initialState = ({
  path: 'search',
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ROUTE:
      return {...state, path: action.payload}
    default:
      return state;
  }
}
