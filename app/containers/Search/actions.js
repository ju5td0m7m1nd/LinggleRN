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
          global.storage.getAllDataForKey('itemId')
            .then(
              data => {
                if (data.length) {
                  global.storage.save({
                    key: 'query',
                    id: data[0],
                    rawData: payload,
                  })
                  global.storage.save({
                    key: 'itemId',
                    id: 0,
                    rawData: (data[0]+1)%5,
                  })
                } else {
                  global.storage.save({
                    key: 'query',
                    id: 0,
                    rawData: payload,
                  })
                  global.storage.save({
                    key: 'itemId',
                    id: 0,
                    rawData: (0+1)%5,
                  })
                }
              }
            )
            .catch(
              err => console.log(err)
            )
            console.log(res._bodyInit)
          dispatch(
            {
              type: actionTypes.SEARCH_SUCCESS,
              payload: res._bodyInit
            }
          )
        }
      )
      .catch(
        err => console.log(err)
      )
  }
}

export const reset = () => ({
  type: actionTypes.RESET
})
