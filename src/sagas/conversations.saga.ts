import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as conversationsActions from '../actions/conversations.action';

// Utilities
import Helper from '../utilities/helper';

// Services
import API from '../services/api';

export function* getConversations() {

    try {

        console.log('Saga getConversations');
        return true;

    } catch (e) {
        console.log(e);
    }

}

export function* watchGetConversations() {
    yield takeEvery(types.GET_CONVERSATIONS, getConversations);
}

const conversationsSaga = [
    fork(watchGetConversations),
];

export default conversationsSaga;
