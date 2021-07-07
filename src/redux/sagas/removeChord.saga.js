import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* removeChord(action) {
    try{
        //send payload from chord card page to api/chords to delete
        yield axios.delete(`/api/chords/${action.payload.id}`);
        console.log(action.payload)
        // fetch chords without deleted chord
        yield put({ type: 'FETCH_CHORDS', payload:action.payload.progression_id });
    } catch(error){
        console.log('Error saga axios post setup chords request:', error);
    }
}

function* DeleteChord() {
    yield takeEvery('REMOVE_CHORD', removeChord);
  }

  export default DeleteChord;