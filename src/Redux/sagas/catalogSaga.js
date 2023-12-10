import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getCatalogSuccess, getCatalogFailure } from "../catalogSlice";
function* workGetCatalogFetch() {
  try {
    const catalog = yield call(() =>
      axios.get("https://6574de3ab2fbb8f6509cbc8a.mockapi.io/api/v1/catalog")
    );
    const catalogData = catalog.data;
    yield put(getCatalogSuccess(catalogData));
  } catch (error) {
    getCatalogFailure(error.message);
  }
}

function* catalogSaga() {
  yield takeEvery("catalog/getCatalogFetch", workGetCatalogFetch);
}

export default catalogSaga;
