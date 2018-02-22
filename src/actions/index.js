import * as actionTypes from "./actionTypes";

export const addItem = value => ({
  type: actionTypes.ADD_TODO,
  value
});

export const deleteItem = key => ({
  type: actionTypes.REMOVE_TODO,
  key
});

export const completedTask = complete => ({
  type: actionTypes.TOGGLE_TODO_ITEM,
  complete
});

export const clearCompleted = () => ({
  type: actionTypes.REMOVE_ALL_ITEM
});

export const allViewItems = () => ({
  type: actionTypes.ALL_VIEW_ITEM
});

export const activeViewItems = () => ({
  type: actionTypes.ACTIVE_VIEW_ITEM
});

export const completedViewItems = () => ({
  type: actionTypes.COMPLETED_VIEW_ITEM
});

export const editItem = updItem => ({
  type: actionTypes.EDIT_ITEM,
  updItem
});

export const setLocation = location => ({
  type: actionTypes.SAVE_LOCATION,
  location
});

export const fetchWeather = () => ({
  type: actionTypes.FETCH_WEATHER
});

export const fetchWeatherSuccess = payload => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
  payload
});

export const fetchWeatherFailure = payload => ({
  type: actionTypes.FETCH_WEATHER_FAILURE,
  payload
});
