import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* AddChord(action) {
    try{
        //send payload from editor to add a chord to api/chords
        yield axios.post('/api/chords', action.payload);
        // fetch all chords including new ones from the database
        yield put({ type: 'FETCH_CHORDS', payload:action.payload.progression_id });
    } catch(error){
        console.log('Error saga axios post chord request:', error);
    }
}

function* AddChordSaga() {
    yield takeEvery('ADD_CHORD', AddChord);
  }

  export default AddChordSaga;