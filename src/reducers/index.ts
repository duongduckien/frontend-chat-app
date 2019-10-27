import { combineReducers } from 'redux';
import { conversationsReducer, IConversationsState } from './conversations.reducer';

export interface IState {
    conversations: IConversationsState;
}

export default combineReducers<IState>({
    conversations: conversationsReducer,
});