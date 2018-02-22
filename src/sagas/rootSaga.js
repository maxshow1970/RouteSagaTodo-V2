import { takeEvery, takeLatest, all } from "redux-saga/effects";
import fetchWeatherSaga from "./fetchWeatherSaga";
import { FETCH_WEATHER } from "../actions/actionTypes";
import { AUTH_REQUEST } from "../reducers/reducerIdent";
import authorize from "./saga";

function* mySaga() {
  yield takeEvery(FETCH_WEATHER, fetchWeatherSaga);
}

function* Saga() {
  yield takeLatest(AUTH_REQUEST, authorize);
}

export default function* rootSaga() {
  yield all([mySaga(), Saga()]);
}
