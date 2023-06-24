import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer.js';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// разрешаем хранить jsx объекты в стейте
			serializableCheck: false,
			// отключаем проверку мутаций
			immutableCheck: false,
		}),
});
