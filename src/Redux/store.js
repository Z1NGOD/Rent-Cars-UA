import { configureStore } from "@reduxjs/toolkit";
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
import favoritesSlice from "./favoritesSlice";
import storage from "redux-persist/lib/storage";
import { API } from "./API/RTK";

const persistConfig = {
  key: "store",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    favorites: persistReducer(persistConfig, favoritesSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(API.middleware),
});
export const persistor = persistStore(store);
