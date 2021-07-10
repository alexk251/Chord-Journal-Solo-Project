import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteProgression(action) {
    try{
        //send payload from user item page to api/progression to delete
        yield axios.delete(`/api/progression/${action.payload}`);
        console.log(action.payload)
        // fetch chords without deleted chord
        yield put({ type: 'FETCH_YOUR_PROGRESSIONS', payload: action.payload});
    } catch(error){
        console.log('Error saga axios post setup chords request:', error);
    }
}

function* DeleteProgression() {
    yield takeEvery('DELETE_PROGRESSION', deleteProgression);
  }

  export default DeleteProgression;