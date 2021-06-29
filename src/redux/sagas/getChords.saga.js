import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChords(action) {
    try{
        //get chords from api/chords
        const response = yield axios.get('/api/chords',{params: {progression_id:action.payload}});
        console.log(response.data)
        //SET Reducer to display on component
        yield put({ type: 'SET_CHORDS', payload:response.data });
    } catch(error){
        console.log('Error saga axios your chords get request:', error);
    }
}

function* getChords() {
    yield takeEvery('FETCH_CHORDS', fetchChords);
  }

  export default getChords;