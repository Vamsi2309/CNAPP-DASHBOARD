import { configureStore } from "@reduxjs/toolkit";
import { rootPersistConfig, rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);
const { dispatch } = store;
const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, persistor, useDispatch, useSelector, dispatch };

export type RootState = ReturnType<typeof store.getState>;