export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

export const authorize = (login, password) => ({
  type: AUTH_REQUEST,
  payload: { login, password }
});

const initialState = {
  token: localStorage.getItem("token"),
  error: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state, token: payload };
    }
    case AUTH_FAILURE: {
      return { ...state, error: payload };
    }
    default:
      return state;
  }
};

export default authReducer;
