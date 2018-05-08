export function GetLenderList() {
  return {
      type: 'GET_LENDER_LIST',
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

