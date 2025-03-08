// authActions.js

// Action Types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// Action Creators

// Simulates user login
export const login = (username) => {
  return (dispatch) => {
    // Mocking an API call or authentication process
    setTimeout(() => {
      dispatch({ type: LOGIN, payload: username });
    }, 1000); // Simulating delay
  };
};

// Simulates user logout
export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
