import { 
    GET_CONVERSATIONS,
    GET_CONVERSATIONS_SUCCESS,
} from './types';

export const getConversations = () => ({
    type: GET_CONVERSATIONS,
});

export const getConversationsSuccess = ({ items }) => ({
    type: GET_CONVERSATIONS_SUCCESS,
    payload: {
        items,
    },
});