import { CollectFundCon } from '../common/solidityAddresses.jsx';
import { web3 } from '../common/solidityAddresses.jsx';

export function GetBorrowerList() {
  return (dispatch) => {
    dispatch({
      type: 'GET_BORROWER_IDS',
      payload: new Promise((resolve, reject) => {
        resolve(CollectFundCon.getAllProposalsForBorrowerList());
      }),
    })
      .then((obj) => {
        let ids = obj.value;
        let borrowerData = [];
        for (let i = 0; i < ids.length; i++) {
          let expireDate = CollectFundCon.getProposalExpiration(ids[i]);
          const isExpired = (expireDate.c[0] < Date.now());
          if ((ids[i] !== '0x0000000000000000000000000000000000000000000000000000000000000000') &&
           !isExpired) {
            let proposalDetails = CollectFundCon.getProposalDetailsByProposalID(ids[i]);
            let proposalOwners = CollectFundCon.getProposalOwner(ids[i]);
            borrowerData.push({
              walletAddress: proposalOwners,
              proposalGoal: proposalDetails[0].c[0],
              proposalTenure: proposalDetails[3].c[0],
              proposalROI: proposalDetails[1].c[0],
              proposalExpiration: new Date(expireDate.c[0]).toLocaleString(),
              proposalAchieved: proposalDetails[2].c[0],
              proposalID: ids[i],

              // proposalID: web3.toAscii(ids[i]),
            });
          }
        }

        return borrowerData;
      })
      .then((borrowerData) => {
        dispatch(BorrowerSetValue({ setFor: 'borrowerList', setVal: borrowerData }));
      })
      .catch((error) => {
        alert('Error: \n' + error.message);
      });
  };
}

export const BorrowerSetValue = (params) => {
  return dispatch => {
    dispatch({
      type: 'BORROWER_SET_VALUE',
      payload: params,
    });
  };
};

export function SetTrue(param) {
  return {
    type: 'SET_TRUE',
    payload: param,
  };
}

export function SetFalse(param) {
  return {
    type: 'SET_FALSE',
    payload: param,
  };
}

export function UpdateInput(event) {
  return {
    type: 'UPDATE_INPUT',
    payload: event.target,
  };
}

export function UpdateCurrentLender(lender) {
  return {
    type: 'UPDATE_LENDER',
    lender: lender,
  };
}

export const InvestAmount = (investDetails) => {
  debugger;
  const { proposalID, lendingAmt, lenderWalletAddr, lenderPassword } = investDetails;
  return (dispatch) => {
    return dispatch({
      type: 'UNLOCK_ACCOUNT',
      payload: new Promise((resolve, reject) => {
        return resolve(web3.personal.unlockAccount(lenderWalletAddr, lenderPassword));
      }),
    })
      .then(() => {
        return dispatch(BorrowerSetValue({ setFor: 'lenderPassword', setVal: '' }));
      })
      .then(() => {
        return dispatch({
          type: 'INVEST_AMOUNT',
          payload: new Promise((resolve, reject) => {
            return resolve(CollectFundCon.lendMoneyToProposal(proposalID, lendingAmt,
               lenderWalletAddr, Date.now(),
               ({ from: lenderWalletAddr,
                value: web3.toWei(lendingAmt, 'Ether'), gas: 2000000, })));
          }),
        });
      })
      .then(() => {
        return dispatch({
          type: 'LOCK_ACCOUNT',
          payload: new Promise((resolve, reject) => {
            return resolve(web3.personal.lockAccount(lenderWalletAddr));
          }),
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};
