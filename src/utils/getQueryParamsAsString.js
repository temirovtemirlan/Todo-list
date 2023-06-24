export function getQueryParamsAsString(arrParams, { atFirst } = { atFirst: true }) {
	if (!arrParams || !arrParams.length) return '';
	const params = arrParams.map((param) => ({ ...param }));
	let result = atFirst ? '?' : '';
	params.forEach((param, index) => {
		const [key] = Object.keys(param);
		if (param[key] === undefined) {
			return;
		}
		if (index === 0) {
			result += atFirst ? `${key}=${param[key]}` : `&${key}=${param[key]}`;
			return;
		}
		result = `${result}&${key}=${param[key]}`;
	});
	return result;
}
