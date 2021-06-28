import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* FetchYourProgressions() {
    try{
        //get chord progressions for user from api/progression
        const response = yield axios.get('/api/progression');
        console.log(response.data)
        //SET Reducer to display on component
        yield put({ type: 'SET_YOUR_PROGRESSIONS', payload:response.data });
    } catch(error){
        console.log('Error saga axios your progressions get request:', error);
    }
}

function* getProgressions() {
    yield takeEvery('FETCH_YOUR_PROGRESSIONS', FetchYourProgressions);
  }

  export default getProgressions;