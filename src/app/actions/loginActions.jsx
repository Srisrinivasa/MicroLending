import { web3 } from '../common/solidityAddresses.jsx';
import regeneratorRuntime from 'regenerator-runtime';

export const LoginSetTrue = (param) => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_SET_TRUE',
      payload: param,
    });
  };
};

export const LoginSetFalse = (param) => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_SET_FALSE',
      payload: param,
    });
  };
};

export const LoginUpdateInput = (event) => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_UPDATE_INPUT',
      payload: event.target,
    });
  };
};

export function checkLogin(credentials) {
  debugger;

  // return dispatch => {
  //   dispatch({
  //     type: 'CHECK_LOGIN_SUCCESS',
  //     result: web3.personal.unlockAccount(credentials.address, credentials.key),
  //   });
  // };

  return new Promise((resolve, reject) => {
    web3.personal.unlockAccount(credentials.address, credentials.key, function (error, result) {
      if (!error) {
        resolve(result);
        console.log(result);
      } else {
        reject(error);
        console.log(error.message);
      }
    });
  });

};
