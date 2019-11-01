import { 
    SUBMIT_USERNAME, 
    SUBMIT_USERNAME_SUCCESS,
} from './types';

export const submitUsername = (payload) => ({
    type: SUBMIT_USERNAME,
    payload,
});

export const submitUsernameSuccess = (payload) => ({
    type: SUBMIT_USERNAME_SUCCESS,
    payload,
});