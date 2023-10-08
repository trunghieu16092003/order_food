// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // sử dụng Local Storage

import userSlice from "./user/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // chỉ lưu slice 'auth' vào Local Storage
};

const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer, // sử dụng reducer đã được xử lý qua Redux Persist
  },
});

export const persistor = persistStore(store);
