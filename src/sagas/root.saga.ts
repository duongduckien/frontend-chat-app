import { all } from 'redux-saga/effects';
import conversationsSaga from './conversations.saga';

function* rootSaga() {
    yield all([
        ...conversationsSaga,
    ]);
}

export default rootSaga;