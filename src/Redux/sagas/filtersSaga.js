import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getFiltersSuccess, getFiltersFailure } from "../filtersSlice";
function* workGetFiltersFetch() {
  try {
    const filters = yield call(() =>
      axios.get("https://6574de3ab2fbb8f6509cbc8a.mockapi.io/api/v1/filters")
    );
    const filterData = filters.data;
    yield put(getFiltersSuccess(filterData));
  } catch (error) {
    getFiltersFailure(error.message);
  }
}

function* filtersSaga() {
  yield takeEvery("filters/getFiltersFetch", workGetFiltersFetch);
}

export default filtersSaga;
