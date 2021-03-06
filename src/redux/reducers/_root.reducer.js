import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import progression from './progression.reducer';
import chordProgressionsReducer from './chordProgressions.reducer'
import highestProgIDReducer from './highestProgID.reducer'
import chordsReducer from './chords.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  progression, // will be an object of progression details
  chordProgressionsReducer, // will be an array of chord progressions with details for userpage
  highestProgIDReducer, // will be an array with just one object in it having highest current progession id
  chordsReducer, // will be an array of chord objects for a selected progression
});

export default rootReducer;
