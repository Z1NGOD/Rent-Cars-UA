import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalogSlice";
import favoritesSlice from "./favoritesSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    favorites: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([saga]),
});

saga.run(rootSaga);
