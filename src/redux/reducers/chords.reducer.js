// set chords of progression selected /setup

const chordsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CHORDS':
        return action.payload;
      default:
        return state;
    }
  };
  
 
  export default chordsReducer;