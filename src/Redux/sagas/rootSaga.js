import { all } from "redux-saga/effects";
import catalogSaga from "./catalogSaga";
import FavoritesSaga from "./favoriteSaga";
import filtersSaga from "./filtersSaga";
export default function* rootSaga() {
  yield all([catalogSaga(), FavoritesSaga(), filtersSaga()]);
}
