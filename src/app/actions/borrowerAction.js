export function GetLenderList() {
  return {
      type: 'GET_LENDER_LIST',
    };
}

export function ShowLoanModal() {
  return {
    type: 'SHOW_LOAN_MODAL',
    showLoanModal: true,
  };
}

export function UpdateCurrentLender(lender) {
  return {
    type: 'UPDATE_LENDER',
    lender: lender,
  };
}

export function CloseLoanModal() {
  return {
    type: 'CLOSE_LOAN_MODAL',
    showLoanModal: false,
  };
}
