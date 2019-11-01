import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as conversationsActions from '../actions/conversations.action';

// Utilities
import Helper from '../utilities/helper';
import Storage from '../utilities/storage';

// Services
import API from '../services/api';

// Interfaces
import { IActionData } from '../interfaces/saga.interface';
import { IUserData } from '../interfaces/users.interface';

export function* submitUsername(action: IActionData) {

    try {

        const result = yield call(API.createUsername, action.payload);
        console.log(result);
        if (result.status === 200) {
            const userData: IUserData = {
                id: result.data.id,
                name: result.data.name,
            };
            Storage.setItem('userinfo', userData);
        }

    } catch (e) {
        console.log(e);
    }

}

export function* watchSubmitUsername() {
    yield takeEvery(types.SUBMIT_USERNAME, submitUsername);
}

const usersSaga = [
    fork(watchSubmitUsername),
];

export default usersSaga;

// created_at: "2019-10-30T18:21:32.000Z"
// id: 1
// is_deleted: 0
// name: "test1"
// socket_id: null
// updated_at: "2019-10-30T18:21:32.000Z"
