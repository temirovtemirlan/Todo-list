import { todosActions } from '../../mockData/actions.js';

export const setTodosAction = (payload) => ({
	type: todosActions.SetTodos,
	payload,
});

export const setDeleteAction = (payload) => ({
	type: todosActions.SetDelete,
	payload
});

export const SetDevishionAction = (payload) => ({
	type: todosActions.SetDevishion,
	payload,
})
// export const getProductsThunk = (data) => async (dispatch) => {
// 	try {
// 		// const { data } = await productsApi.getProducts();
// 		dispatch(setProductsAction(data));
// 	} catch (err) {
// 		console.error(err);
// 		throw err;
// 	}
// };
