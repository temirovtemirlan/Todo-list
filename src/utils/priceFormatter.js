const priceFormatter = (amount) => {
	if (!amount || Number.isNaN(amount)) return '0 ₽';
	return `${amount?.toLocaleString()} ₽`;
};
export default priceFormatter;
