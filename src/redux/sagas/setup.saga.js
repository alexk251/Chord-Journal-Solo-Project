import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* PostSetup(action) {
    try{
        //send payload from setup page to api/progression
        yield axios.post('/api/progression', action.payload);
        // set progression details in editor page
        yield put({ type: 'SET_PROGRESSION_DETAILS', payload:action.payload });
    } catch(error){
        console.log('Error saga axios post request:', error);
    }
}

function* PostSetupSaga() {
    yield takeEvery('ADD_PROGRESSION', PostSetup);
  }

  export default PostSetupSaga;