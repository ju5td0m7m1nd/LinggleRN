'use strict'
/**
 * Created by caimingxun on 2017/2/16.
 */
import actionTypes from './actionTypes';

export const search = (payload) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SEARCH,
    })
    const formData = new FormData;
    formData.append('query', payload)
    return fetch(
      'http://www.ju5td0m7m1nd.com:8000/query/',
      {
        method: 'POST',
        body: formData
      }
    )
      .then(
        res => {
          console.log(res._bodyInit)
        }
      )
      .catch(
        err => console.log(err)
      )
  }
}
