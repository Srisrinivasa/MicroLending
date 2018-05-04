const sampleReducer = (state = { name: 'sri' }, action) => {
    switch (action.type) {
    case 'UPDATE_NAME':
      state = {
          ...state,
          [name]: action.payload,
        };
    break;
  };
    return state;
  };

export default sampleReducer;
