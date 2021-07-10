import { all } from 'redux-saga/effects';
import AddChordSaga from './addChord.saga';
import PostSetupChords from './addSetupChords.saga';
import DeleteProgression from './deleteProgression.saga';
import getChords from './getChords.saga';
import getHighestProgression from './highestProgID.saga';
import loginSaga from './login.saga';
import getProgressions from './progressions.saga';
import registrationSaga from './registration.saga';
import DeleteChord from './removeChord.saga';
import PostSetupSaga from './setup.saga';
import updateChordSaga from './updateChord.saga';
import userSaga from './user.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(), // registration saga
    userSaga(), // user saga
    PostSetupSaga(), // sends setup data to database
    getProgressions(),  // gets progression for user from database
    getHighestProgression(),  // gets highest progression id from database
    PostSetupChords(),  // post setup chords to database
    DeleteChord(),  // delete chord from database
    getChords(),  // get chords from database
    updateChordSaga(),  // update chord in database
    AddChordSaga(), // add a chord to chord progression
    DeleteProgression(), // delete progression from user page table
  ]);
}
