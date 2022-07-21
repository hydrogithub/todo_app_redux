// import { createStore } from "redux";
import rootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
// import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = composeWithDevTools();

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
