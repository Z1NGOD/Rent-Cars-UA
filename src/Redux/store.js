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
import catalogSlice from "./catalogSlice";
import favoritesSlice from "./favoritesSlice";
import filtersSlice from "./filtersSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "store",
  storage,
  whitelist: ["favorites"],
};

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    favorites: persistReducer(persistConfig, favoritesSlice),
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([saga]),
});
export const persistor = persistStore(store);
saga.run(rootSaga);
