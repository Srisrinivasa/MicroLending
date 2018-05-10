import initialState from '../common/initialstates';

const ULPReducer = (state = initialState.ULPReducer, action) => {
    switch (action.type) {

    case 'ULP_SET_TRUE':
      state = {
          ...state,
          [action.payload]: true,
        };
    break;

    case 'ULP_SET_FALSE':
      state = {
          ...state,
          [action.payload]: false,
        };
    break;

    case 'ULP_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    break;
  };
    return state;
  };

export default ULPReducer;
