import axios from "axios";

const token = localStorage.getItem("token");

//Profile
export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

//Logout
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

//Refresh Token
export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILURE = "REFRESH_TOKEN_FAILURE";

//Profile
const getProfileRequest = () => {
  return {
    type: GET_PROFILE_REQUEST,
  };
};

const getProfileSuccess = (data) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: data,
  };
};

const getProfileFailure = () => {
  return {
    type: GET_PROFILE_FAILURE,
  };
};

//Logout
const logOutRequest = () => {
  return { type: LOGOUT_REQUEST };
};

const logOutSuccess = (data) => {
  return { type: LOGOUT_SUCCESS, payload: data };
};

const logOutFailure = (error) => {
  return { type: LOGOUT_FAILURE, payload: error };
};

//Refresh Token
const refreshTokenRequest = () => {
  return { type: REFRESH_TOKEN_REQUEST };
};

const refreshTokenSuccess = (data) => {
  return { type: REFRESH_TOKEN_SUCCESS, payload: data };
};

const refreshTokenFailure = (error) => {
  return { type: REFRESH_TOKEN_FAILURE, payload: error };
};

//Profile
export const getProfile = (data) => (dispatch) => {
  dispatch(getProfileRequest());
  return axios({
    url: `http://localhost:7777/profile`,
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((res) => {
      dispatch(getProfileSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProfileFailure(err));
    });
};

//Logout
export const logOut = () => (dispatch) => {
  dispatch(logOutRequest());
  return axios({
    url: `http://localhost:7777/logout`,
    method: "POST",

    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      dispatch(logOutSuccess(res.data));
    })
    .catch((err) => {
      dispatch(logOutFailure(err));
    });
};

//Refresh Token
export const refreshToken = (data) => (dispatch) => {
  dispatch(refreshTokenRequest());
  return axios({
    url: `http://localhost:7777/refresh`,
    method: "POST",

    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((res) => {
      dispatch(refreshTokenSuccess(res.data));
      localStorage.setItem("token", res.data.accessToken);
    })
    .catch((err) => {
      dispatch(refreshTokenFailure(err));
    });
};
