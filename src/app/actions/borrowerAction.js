import { CollectFundCon } from '../common/solidityAddresses.jsx';

export function GetLenderList() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return CollectFundCon.getAllProposalsForBorrowerList((error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
          alert('Error in' + error.message);
        }
      });
    }).then((result) => {
      debugger;
      console.log(result);
    })
    .catch((error) => {
      alert('Something went wrong');
    });
  };
}

export function SetTrue(param) {
  return {
    type: 'SET_TRUE',
    payload: param,
  };
}

export function SetFalse(param) {
  return {
    type: 'SET_FALSE',
    payload: param,
  };
}

export function UpdateInput(event) {
  return {
    type: 'UPDATE_INPUT',
    payload: event.target,
  };
}

export function UpdateCurrentLender(lender) {
  return {
    type: 'UPDATE_LENDER',
    lender: lender,
  };
}

          // dispatch({
          //   type: 'GET_LENDER_LIST',
          //   payload: ''
          //   })