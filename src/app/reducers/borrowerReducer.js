import initialState from '../common/initialstates';

export default function borrowerReducer(state = initialState.borrowerReducer, action) {
  switch (action.type) {
  case 'GET_LENDER_LIST':
    state = {
            ...state,
          };
    return state;
  case 'UPDATE_INPUT':
    state = {
      ...state,
      [action.payload.name]: action.payload.value,
    };
    return state;

  case 'UPDATE_LENDER':
    state = {
            ...state,
            selectedLender: action.lender,
          };
    return state;
  case 'SET_TRUE':
    state = {
            ...state,
            [action.payload]: true,
          };
    return state;
  case 'SET_FALSE':
    state = {
            ...state,
            [action.payload]: false,
          };
    return state;

  default:
    return state;
}
}
