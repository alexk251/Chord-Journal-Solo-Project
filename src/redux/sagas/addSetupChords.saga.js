import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* AddSetupChords(action) {
    try{
        //send payload from setup page to api/progression
        yield axios.post('/api/chords', action.payload);
        yield put({ type: 'FETCH_CHORDS', payload:action.payload[0].progression_id });
    } catch(error){
        console.log('Error saga axios post setup chords request:', error);
    }
}

function* PostSetupChords() {
    yield takeEvery('ADD_SETUP_CHORDS', AddSetupChords);
  }

  export default PostSetupChords;