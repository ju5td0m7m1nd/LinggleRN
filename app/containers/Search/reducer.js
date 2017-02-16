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
    case actionTypes.SEARCH_SUCCESS:
      return { ...state, isLoading: false, answers: JSON.parse(action.payload), done: true}
    case actionTypes.SEARCH_FAILED:
      return { ...state, isLoading: false, done: false}
    case actionTypes.RESET:
      return { ...state, isLoading: false, answers: {}, done: false}
    default:
      return state;
  }
}
