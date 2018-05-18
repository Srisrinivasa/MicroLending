import { CollectFundCon } from '../common/solidityAddresses.jsx';
import { web3 } from '../common/solidityAddresses.jsx';
import hashFnv32a from '../common/hashFNV32a.jsx';
let regeneratorRuntime = require('regenerator-runtime');

export const ULPSetTrue = (param) => {
  return dispatch => {
    dispatch({
      type: 'ULP_SET_TRUE',
      payload: param,
    });
  };
};

export const ULPSetFalse = (param) => {
  return dispatch => {
    dispatch({
      type: 'ULP_SET_FALSE',
      payload: param,
    });
  };
};

export const ULPUpdateInput = (event) => {
  return dispatch => {
    dispatch({
      type: 'ULP_UPDATE_INPUT',
      payload: event.target,
    });
  };
};

export const ULPSetValue = (params) => {
  return dispatch => {
    dispatch({
      type: 'ULP_SET_VALUE',
      payload: params,
    });
  };
};

export const unlockAccount = (walletAddress, password) => {
  return dispatch => {
          return dispatch({
            type: 'UNLOCK_ACCOUNT',
            payload: new Promise((resolve, reject) => {
              return resolve(web3.personal.unlockAccount(walletAddress, password));
            }),
          });
        };
};

export const lockAccount = (walletAddress) => {
  return dispatch => {
    dispatch({
        type: 'LOCK_ACCOUNT',
        payload: new Promise((resolve, reject) => {
          return resolve(web3.personal.lockAccount(walletAddress));
        }),
      });
  };
};

export const AddProposal = (proposalDetails) => {
  const { proposalAmount, proposalTenure, proposalROI, walletAddress, password } = proposalDetails;
  return dispatch => {
    dispatch(unlockAccount(walletAddress, password))
    .then(() => {dispatch(ULPSetValue({ setFor: 'userPassword', setVal: '' }));})
    .then(() => {
      const str = (Math.random() * Date.now()).toString().substring(0, 7);
      const ID = 'PROP' + str;
      dispatch({
        type: 'ADD_PROPOSAL',
        payload: new Promise((resolve, reject) => {
              let today = Date.now();
              resolve(CollectFundCon.submitProposal(ID, proposalAmount,
              proposalROI, proposalTenure, walletAddress, today, (today + (24 * 60 * 60 * 1000)),
              ({ from: walletAddress, gas: 20000000 })
              ));
            }),
      });
    })
    .then(() => {dispatch(lockAccount(walletAddress));})
    .catch((error) => {
      alert(error.message);
    });
  };
};
