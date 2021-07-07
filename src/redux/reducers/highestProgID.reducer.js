// set the highest Progression ID for setup progression page

const highestProgIDReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_HIGHEST_PROGESSION':
        return action.payload;
      default:
        return state;
    }
  };
  
 
  export default highestProgIDReducer;