

// set progression details for editor page and details pages

const progressionReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROGRESSION_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
 
  export default progressionReducer;