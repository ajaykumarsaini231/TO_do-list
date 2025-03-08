// taskActions.js

import axios from "axios";

// Action Types
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const SET_PRIORITY = "SET_PRIORITY";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

// Action Creators

// Add a new task
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

// Delete a task
export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

// Toggle task completion
export const toggleComplete = (taskId) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: taskId,
  };
};

// Set priority for a task
export const setPriority = (taskId, priority) => {
  return {
    type: SET_PRIORITY,
    payload: { taskId, priority },
  };
};

// Fetch weather data for outdoor tasks
export const fetchWeather = (location) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=85144a2d61502b9ab1e56bbfd8b6c9ca` 
    );
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_WEATHER_ERROR, payload: error.message });
    }
  };
};
