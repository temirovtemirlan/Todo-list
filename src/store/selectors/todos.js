import { createSelector } from 'reselect';

const state = ({ todos }) => todos;


export const todosSelector = createSelector(state, ({ todos }) => todos);
export const devishionSelector = createSelector(state, ({ devishion }) => devishion);
// export const selectedObjectSelector = state => state.selectedObject;