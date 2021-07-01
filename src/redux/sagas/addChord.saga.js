import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* AddChord(action) {
    try{
        //send payload from setup page to api/chords
        yield axios.post('/api/chords', action.payload);
        yield put({ type: 'FETCH_CHORDS', payload:action.payload.progression_id });
    } catch(error){
        console.log('Error saga axios post chord request:', error);
    }
}

function* AddChordSaga() {
    yield takeEvery('ADD_CHORD', AddChord);
  }

  export default AddChordSaga;