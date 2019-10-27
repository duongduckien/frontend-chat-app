import * as types from '../actions/types';

export interface IConversationsState {
    listConversations: any;
}

export const CONVERSATIONS_INITAL_STATE: IConversationsState = {
    listConversations: [],
};

export function conversationsReducer(state = CONVERSATIONS_INITAL_STATE, action: any): IConversationsState {
    switch (action.type) {
        case types.GET_CONVERSATIONS_SUCCESS: {
            return { ...state, ...{ listConversations: action.payload.items } };
        }
        default: {
            return state;
        }   
    }
}
