import axios from 'axios';

export const storageTokenName = '123';

const requiredHeaders = {
	// 'x-request-id': Math.random(),
	// 'x-service-name': 'mytech-admin-ui',
};

export default async function axiosFetch(config) {
	let newConfig = { ...config };

	const { isAuthorization } = config;

	const token = localStorage.getItem(storageTokenName);

	if (isAuthorization && token) {
		newConfig = {
			...config,
			headers: {
				...config?.headers,
				authorization: `Bearer ${token}`,
			},
		};
	}

	return axios({
		...newConfig,
		headers: {
			...newConfig.headers,
			...requiredHeaders,
		},
	}).catch((error) => {
		const status = error?.response?.status;
		// if (config.errorCallback) {
		// 	config?.errorCallback?.(error);
		// }
		if (isAuthorization && (status === 401 || status === 403)) {
			//authProvider.logout(null)
		}
		if (!localStorage.token) {
			//authProvider.logout(null)
		}
		throw error;
	});
}
