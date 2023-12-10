import { all } from "redux-saga/effects";
import catalogSaga from "./catalogSaga";
import filtersSaga from "./filtersSaga";
export default function* rootSaga() {
  yield all([catalogSaga(), filtersSaga()]);
}
