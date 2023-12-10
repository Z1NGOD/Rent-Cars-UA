import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getFavoritesSuccess,
  favoritesFailure,
} from "../favoritesSlice";
function* workGetFavoritesFetch() {
  try {
    const favorites = yield call(() =>
      axios.get("https://6574de3ab2fbb8f6509cbc8a.mockapi.io/api/v1/favorites")
    );

    yield put(getFavoritesSuccess(favorites));
  } catch (error) {
    favoritesFailure(error.message);
  }
}

function* FavoritesSaga() {
  yield takeEvery("favorites/getFavoritesFetch", workGetFavoritesFetch);
}

export default FavoritesSaga;
