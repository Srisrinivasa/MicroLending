import initialState from '../common/initialstates';

export default function borrowerReducer(state = initialState.borrowerReducer, action) {
  debugger;
  switch (action.type) {
    case 'GET_BORROWER_IDS_FULFILLED':
      state = {
        ...state,
        borrowerIds: action.payload,
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

    case 'BORROWER_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
      return state;

    case 'INVEST_AMOUNT_PENDING':
      state = {
        ...state,
        isPending: true,
      };
      return state;

    case 'INVEST_AMOUNT_FULFILLED':
      state = {
        ...state,
        isPending: false,
        amountTx: action.payload,
      };
      return state;

    case 'INVEST_AMOUNT_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
      return state;

    case 'UNLOCK_ACCOUNT_PENDING':
      state = {
        ...state,
        isPending: true,
      };
      return state;

    case 'UNLOCK_ACCOUNT_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
      return state;

    case 'UNLOCK_ACCOUNT_FULFILLED':
      state = {
        ...state,
        isPending: false,
      };
      return state;

    case 'LOCK_ACCOUNT_PENDING':
      state = {
        ...state,
        isPending: true,
      };
      return state;

    case 'LOCK_ACCOUNT_FULFILLED':
      state = {
        ...state,
        isPending: false,
      };
      return state;

    case 'LOCK_ACCOUNT_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
      return state;

    default:
      return state;
  }
}
