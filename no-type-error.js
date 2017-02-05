/* @flow */
import { takeLatest } from 'redux-saga/effects';
import type { Effect, Workable0 } from 'redux-saga/effects';

type ExampleAction = {
    type: string;
}

function* worker(action?: ExampleAction) {
    if (!action) {
        return;
    }
    console.log(action.type);
}

export default function* rootSaga(): Generator<Effect,void,*> {
    yield takeLatest('AN_ACTION', (worker: Workable0<ExampleAction>));
}


