'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */
import actionTypes from './actionTypes';

export const route = (key, params) => {
  return {
    type: actionTypes.ROUTE,
    payload: key,
    key,
    params,
  };
}
