const initialState =  {
    borrowerReducer: {
      selectedBorrower: {},
      borrowerList: [],
      showLoanModal: false,
      lenderWalletAddr: '',
      lendingAmt: '',
      lenderPassword: '',
    },
    loginReducer: {
      walletAddress: '',
      loginPassword: '',
      showLoginModal: false,
    },
    ULPReducer: {
      showAddProposalModal: false,
      showCredentialManager: false,
      proposalAmount: '',
      proposalTenure: '',
      proposalROI: '',
      userPassword: '',
    },
    ProposalsReducer: {
      myProposals: [],
      myInstallments: [],
      showCredentialModal: false,
      showCredentialManager: false,  //collect amount modal
      selectedEMI: {},
      userWalletAddr: '',
      userPassword: '',
      selectedCollectAmtRow: {},
    },
  };

export default initialState;
