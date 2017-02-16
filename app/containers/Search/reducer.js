'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */

import actionTypes from './actionTypes';
const initialState = ({
  isLoading: false,
  done: false,
  answers: {},
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {...state, isLoading: true}
    default:
      return state;
  }
}
