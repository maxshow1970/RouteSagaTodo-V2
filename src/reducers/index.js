import { combineReducers } from "redux";
import todo from "./reducerToDo";
import todoWeather from "./reducerWeather";
import authReducer from "./reducerIdent";

export default combineReducers({ todo, todoWeather, authReducer });
