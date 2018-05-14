import { web3 } from '../common/solidityAddresses.jsx';
import { browserHistory } from 'react-router';

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

export const LoginSetValue = (params) => {
  return dispatch => {
    debugger;
    dispatch({
      type: 'LOGIN_SET_VALUE',
      payload: params,
    });
  };
};

export function checkLogin(credentials) {
  return (dispatch) => {
    dispatch({
      type: 'CHECK_LOGIN',
      payload: new Promise((resolve, reject) => {
        resolve(web3.personal.unlockAccount(credentials.address, credentials.key));
      }),
    })
    .catch(error => {
      alert(error.message);
    });
  };
};
