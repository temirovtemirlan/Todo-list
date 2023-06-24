import { todosActions } from '../../mockData/actions.js';

const initState = {
	todos: null,
	devishion: null,
};

const initialState = { ...initState };

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case todosActions.SetTodos:
			return {
				...state,
				todos: action.payload,
			};
		case todosActions.SetDevishion:
			return {
				...state,
				devishion: action.payload
			}
		default:
			return state;
	}
};	