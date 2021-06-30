import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateChord(action) {
try {
    yield axios.put(`/api/chords/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_CHORDS', payload:action.payload.progression_id });
} catch (error) {
    console.log('Error in update chord saga: ', error);
}
}

function* updateChordSaga() {

    yield takeLatest('UPDATE_CHORD', updateChord);

}

export default updateChordSaga;