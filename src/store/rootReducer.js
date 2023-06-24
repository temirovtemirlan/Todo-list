import { combineReducers } from 'redux';
import { todosReducer } from './reducers/todos';

export const rootReducer = combineReducers({
	todos: todosReducer
});
