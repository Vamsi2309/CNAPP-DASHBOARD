import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashBoardSlice from './slice/dashBoardSlice'


const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ['dashboard'],
};

const rootReducer = combineReducers({
  dashboard: dashBoardSlice,
});
export { rootPersistConfig, rootReducer };