import { CollectFundCon, PayInstallmentsCon } from '../common/solidityAddresses.jsx';
import { web3 } from '../common/solidityAddresses.jsx';

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

export const ProposalSetValue = (params) => {
  return dispatch => {
    dispatch({
      type: 'PROPOSAL_SET_VALUE',
      payload: params,
    });
  };
};

export const getMyProposals = (walletAddress) => {
  return dispatch => {
    dispatch({
      type: 'GET_MY_PROPOSAL_IDS',
      payload: new Promise((resolve, reject) => {
        return resolve(CollectFundCon.getBorrrowerSpecificProposals(walletAddress));
      })
        .then((proposals) => {
          debugger;
          let proposalData = [];
          for (let i = 0; i < proposals.length; i++) {
            let proposalDetails = CollectFundCon.getProposalDetailsByProposalID(proposals[i]);
            let expireDate = CollectFundCon.getProposalExpiration(proposals[i]);
            let status;
            let isClaimed = 'N.A';
            const isFundNotAchieved = (proposalDetails[0].c[0] > proposalDetails[2].c[0]);
            const isExpired = (expireDate.c[0] < Date.now());
            if (isFundNotAchieved && !isExpired) {
              status = 'PENDING';
            } else if (isFundNotAchieved && isExpired) {
              status = 'FAILED';
            } else {
              status = 'SUCCESS';
              isClaimed = CollectFundCon.getFundCollectStatus(proposals[i]);
            }

            proposalData.push({
              ID: web3.toAscii(proposals[i]),
              Amt: proposalDetails[0].c[0],
              Tenure: proposalDetails[3].c[0],
              ROI: proposalDetails[1].c[0],
              SubDate: new Date(proposalDetails[4].c[0]).toLocaleString(),
              Fund: proposalDetails[2].c[0],
              Status: status,
              ClaimStatus: isClaimed,
              ExpireDate: expireDate.c[0],
            });
          }

          return proposalData;
        })
        .then((proposalDetails) => {
          dispatch(ProposalSetValue({ setFor: 'myProposals', setVal: proposalDetails }));
        })
        .catch((error) => {
          alert(error.message);
        }),
    });
  };
};

export const getMyInstallments = (walletAddress) => {
  debugger;
  return dispatch => {
    dispatch({
      type: 'GET_MY_INSTALLMENT_IDS',
      payload: new Promise((resolve, reject) => {
        return resolve(CollectFundCon.getBorrowerSuccessfulProposals(walletAddress));
      })
        .then((ids) => {
          let installmentData = [];
          for (let i = 0; i < ids.length; i++) {
            let proposalDetails = PayInstallmentsCon.getDueInstallment(ids[i]);
            if (proposalDetails[0].c[0] > 0) {
              installmentData.push({
                installmentAmt: proposalDetails[0].c[0],
                dueDate: new Date(proposalDetails[1].c[0]).toLocaleString(),
                remainingTenure: proposalDetails[0].c[0],
              });
            }
          }

          dispatch(ProposalSetValue({ setFor: 'myInstallments', setVal: installmentData }));
        })
        .catch((error) => {
          alert(error.message);
        }),
    });
  };
};

export const unlockAccount = (walletAddress, password) => {
  return dispatch => {
          return dispatch({
            type: 'UNLOCK_ACCOUNT',
            payload: new Promise((resolve, reject) => {
              return resolve(web3.personal.unlockAccount(walletAddress, password));
            }),
          })
          .then(() => {
            dispatch(ProposalSetValue({ setFor: 'userPassword', setVal: '' }));
          });
        };
};

export const lockAccount = (walletAddress) => {
  return dispatch => {
    return dispatch({
      type: 'LOCK_ACCOUNT',
      payload: new Promise((resolve, reject) => {
        return resolve(web3.personal.lockAccount(walletAddress));
      }),
    });
  };
};

export const collectAmount = (selectedRow, walletAddress, password) => {
  const { ID } = selectedRow;
  let today = Date.now();
  return dispatch => {
        return dispatch(unlockAccount(walletAddress, password))
        .then(() => {
          return dispatch({
            type: 'COLLECT_AMOUNT',
            payload:  new Promise((resolve, reject) => {
              return resolve(CollectFundCon.proposalGoalReached(ID, today,
               (today + (24 * 60 * 60 * 1000 * 30)),
              { from: walletAddress, gas: 2000000 }));
            }),
          });
        })
        .then(() => {dispatch(lockAccount(walletAddress));})
        .catch((error) => {
          alert(error.message);
        });
      };
};
