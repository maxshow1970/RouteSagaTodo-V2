import { put } from "redux-saga/effects";

import { AUTH_SUCCESS, AUTH_FAILURE } from "../reducers/reducerIdent";

export default function* authorize({ payload: { login, password } }) {
  const options = {
    body: JSON.stringify({ login, password }),
    method: "POST",
    headers: { "Content-Type": "application/json" }
  };

  console.log("login2", login, "password", password, "options", options);
  try {
    const token = {
      login,
      password
    };
    console.log("token", token);
    yield put({ type: AUTH_SUCCESS, payload: token });
    localStorage.setItem("token", token);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: AUTH_FAILURE, payload: message });
    localStorage.removeItem("token");
  }
}
