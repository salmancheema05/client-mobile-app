import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginapi } from "./api/userLogin";
import authReducer from "./redux/AuthSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  authReducer: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    persisted: persistedReducer,
    [loginapi.reducerPath]: loginapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loginapi.middleware),
});
const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
