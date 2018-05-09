
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
