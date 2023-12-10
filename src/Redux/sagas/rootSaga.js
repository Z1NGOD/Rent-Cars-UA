import { all } from "redux-saga/effects"
import catalogSaga from "./catalogSaga";
import FavoritesSaga from "./favoriteSaga";
export default function* rootSaga() {
  yield all([catalogSaga(), FavoritesSaga()]);
}