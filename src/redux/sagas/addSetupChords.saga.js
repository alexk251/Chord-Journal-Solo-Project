import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* AddSetupChords(action) {
    try{
        //send payload from setup page to api/chords/setup
        for(let i = 0; i < action.payload.length; i++){
            yield axios.post('/api/chords/setup', action.payload[i]);
            console.log('posting chord', i+1)
        }
        yield put({ type: 'FETCH_CHORDS', payload:action.payload[0].progression_id });
    } catch(error){
        console.log('Error saga axios post setup chords request:', error);
    }
}

function* PostSetupChords() {
    yield takeEvery('ADD_SETUP_CHORDS', AddSetupChords);
  }

  export default PostSetupChords;