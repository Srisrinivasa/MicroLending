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
  };
    return state;
  };

export default proposalsReducer;
