export default function borrowerReducer(state = {
    lenders: [{
        id: 1,
        name: 'Abhijit',
        price: 10000,
        roi: 8.5,
      },
      {
        id: 2,
        name: 'Sathwik',
        price: 5000,
        roi: 8,
      },
      {
        id: 3,
        name: 'Kaushik',
        price: 1000,
        roi: 5,
      },
    ],
    selectedLender: {},
    showLoanModal: false,
  }, action) {
  switch (action.type) {
  case 'GET_LENDER_LIST':
    state = {
            ...state,
          };
    return state;
  case 'SHOW_LOAN_MODAL':
    state = {
            ...state,
            showLoanModal: action.showLoanModal,
          };
    return state;
  case 'UPDATE_LENDER':
    state = {
            ...state,
            selectedLender: action.lender,
          };
    return state;
  case 'CLOSE_LOAN_MODAL':
    state = {
            ...state,
            showLoanModal: action.showLoanModal,
          };
    return state;
  default:
    return state;
}
}
