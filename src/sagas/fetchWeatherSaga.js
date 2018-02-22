import { put, select } from "redux-saga/effects";
import { get } from "axios";
import {
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setLocation
} from "../actions";

const locationAPI = "https://ipapi.co/json";
const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?";
const weatherOptions =
  "&units=metric&cnt=1&appid=87ce5c597f2ecbd9badcf8169e79a874";

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
export default function* fetchWeatherSaga() {
  try {
    const { data } = yield get(locationAPI);
    const { longitude, latitude } = data;

    yield put(setLocation({ longitude, latitude }));
  } catch (err) {
    yield put(fetchWeatherFailure(err.message));
  }

  try {
    const { longitude: lon, latitude: lat } = yield select(
      ({ todoWeather }) => todoWeather
    );

    const { data } = yield get(
      `${weatherAPI}lat=${lat}&lon=${lon}${weatherOptions}`
    );

    yield put(fetchWeatherSuccess(data));
  } catch (err) {
    yield put(fetchWeatherFailure(err.message));
  }
}
