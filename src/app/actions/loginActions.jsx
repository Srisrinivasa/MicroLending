import { web3 } from '../common/solidityAddresses.jsx';

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

// login actions

export function checkLogin(credentials) {
  return (dispatch) => {
    checkaccount(credentials).then((final) => {
        alert('async', final); //async action
      })
      .catch((error) => {
        alert('caught error outside');
        console.log('outside ---', error.message);
      });
  };
};

// checking account and unlocking it for login

const checkaccount = (credentials, result) => {
      return new Promise((resolve, reject) => {
        return web3.personal.unlockAccount(credentials.address, credentials.key,
         (error, result) => {
          if (!error) {
            alert('Success');
            console.log(result);
            resolve(result);            //resolve is necessary to call async action
          } else {
            alert('caught error inside');
            console.log(error.message);
          }
        });
      });
    };
