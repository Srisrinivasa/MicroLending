import initialState from '../common/initialstates';

const proposalsReducer = (state = initialState.ProposalsReducer, action) => {
    switch (action.type) {

    case 'PROPOSAL_SET_TRUE':
      state = {
          ...state,
          [action.payload]: true,
        };
    break;

    case 'PROPOSAL_SET_FALSE':
      state = {
          ...state,
          [action.payload]: false,
        };
    break;

    case 'PROPOSAL_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    break;

    case 'GET_MY_IDS_PENDING':
      state = {
        ...state,
        isPending: true,
      };
    break;

    case 'GET_MY_IDS_FULFILLED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'GET_MY_IDS_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'PROPOSAL_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
    break;

    case 'COLLECT_AMOUNT_PENDING':
      state = {
        ...state,
        isPending: true,
      };
    break;

    case 'COLLECT_AMOUNT_FULFILLED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'COLLECT_AMOUNT_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'UNLOCK_ACCOUNT_PENDING':
      state = {
        ...state,
        isPending: true,
      };
    break;

    case 'UNLOCK_ACCOUNT_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'UNLOCK_ACCOUNT_FULFILLED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'LOCK_ACCOUNT_PENDING':
      state = {
        ...state,
        isPending: true,
      };
    break;

    case 'LOCK_ACCOUNT_FULFILLED':
      state = {
        ...state,
        isPending: false,
      };
    break;

    case 'LOCK_ACCOUNT_REJECTED':
      state = {
        ...state,
        isPending: false,
      };
    break;

  };

    return state;
  };

export default proposalsReducer;
