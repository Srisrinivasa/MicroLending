const initialState =  {
    borrowerReducer: {
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
    },
    loginReducer: {
      walletAddress: '',
      loginPassword: '',
    },
  };

export default initialState;
