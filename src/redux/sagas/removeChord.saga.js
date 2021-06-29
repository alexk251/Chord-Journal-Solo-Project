import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* removeChord(action) {
    try{
        //send payload from setup page to api/progression
        yield axios.post('/api/chords', action.payload);
        yield put({ type: 'FETCH_CHORDS'});
    } catch(error){
        console.log('Error saga axios post setup chords request:', error);
    }
}

function* DeleteChord() {
    yield takeEvery('REMOVE_CHORD', removeChord);
  }

  export default DeleteChord;