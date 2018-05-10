
export const ProposalSetTrue = (param) => {
  return dispatch => {
    dispatch({
      type: 'PROPOSAL_SET_TRUE',
      payload: param,
    });
  };
};

export const ProposalSetFalse = (param) => {
  return dispatch => {
    dispatch({
      type: 'PROPOSAL_SET_FALSE',
      payload: param,
    });
  };
};

export const ProposalUpdateInput = (event) => {
  return dispatch => {
    dispatch({
      type: 'PROPOSAL_UPDATE_INPUT',
      payload: event.target,
    });
  };
};
