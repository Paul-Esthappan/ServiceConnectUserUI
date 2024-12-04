import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import categoryReducer from "./features/category/categorySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const categoryPersistConfig = {
	key: "category",
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCategoryReducer = persistReducer(
	categoryPersistConfig,
	categoryReducer
);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		category: persistedCategoryReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
			// devTools: import.meta.env.NODE_ENV !== "production",
		}),
});

export const persistor = persistStore(store);
