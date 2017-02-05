/* @flow */
import { takeLatest } from 'redux-saga/effects';
import type { Effect } from 'redux-saga/effects';

type ExampleAction = {
    type: 'AN_ACTION';
}

function* worker(action?: ExampleAction) {
    if (!action) {
        return;
    }
    console.log(action.type);
}

export default function* rootSaga(): Generator<Effect,void,*> {
    yield takeLatest('AN_ACTION', worker);
}


