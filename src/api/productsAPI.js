import axiosFetch from './axiosFetch.js';

export default class ProductsAPI {
	/*  */
	getProducts() {
		return axiosFetch({
			method: 'get',
			url: `${import.meta.env.VITE_API_URL}/products`,
			isAuthorization: true,
		});
	}
}
