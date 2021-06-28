

//'SET_PROGRESSION_DETAILS'

const progressionReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROGRESSION_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default progressionReducer;