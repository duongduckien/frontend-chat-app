import { all } from 'redux-saga/effects';
import conversationsSaga from './conversations.saga';
import usersSaga from './users.saga';

function* rootSaga() {
    yield all([
        ...conversationsSaga,
        ...usersSaga,
    ]);
}

export default rootSaga;