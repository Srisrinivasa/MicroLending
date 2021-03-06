import initialState from '../common/initialstates';

const loginReducer = (state = initialState.loginReducer, action) => {
    switch (action.type) {

    case 'LOGIN_SET_TRUE':
      state = {
          ...state,
          [action.payload]: true,
        };
    break;

    case 'LOGIN_SET_FALSE':
      state = {
          ...state,
          [action.payload]: false,
        };
    break;

    case 'LOGIN_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case 'CHECK_LOGIN_REQUEST':
      state = {
        ...state,
        isLoading: true,
      };
    break;

    case 'CHECK_LOGIN_SUCCESS':
      state = {
        ...state,
        isLoading: false,
        isValid: action.result,
      };
    break;

  };
    return state;
  };

export default loginReducer;
