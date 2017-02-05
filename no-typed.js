import { takeLatest } from 'redux-saga/effects';

function* worker(action) {
    console.log(action.type);
}

export default function* rootSaga() {
    yield takeLatest('AN_ACTION', worker);
}


