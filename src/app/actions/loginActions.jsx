
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
