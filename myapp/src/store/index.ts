import {combineReducers,configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../features/todoSlice';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk'
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: TodoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware:[thunk]
});

export default store;
export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);
