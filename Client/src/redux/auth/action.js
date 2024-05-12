import axios from "axios";

//Register

export const POST_AUTH_REQUEST = "POST_AUTH_REQUEST";
export const POST_AUTH_SUCCESS = "POST_AUTH_SUCCESS";
export const POST_AUTH_FAILURE = "POST_AUTH_FAILURE";

//Login
export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";

//Register
const postAuthRequest = () => {
  return {
    type: POST_AUTH_REQUEST,
  };
};

const postAuthSuccess = (data) => {
  return {
    type: POST_AUTH_SUCCESS,
    payload: data,
  };
};

const postAuthFailure = () => {
  return {
    type: POST_AUTH_FAILURE,
  };
};

//Login
const getAuthRequest = () => {
  return {
    type: GET_AUTH_REQUEST,
  };
};

const getAuthSuccess = (data) => {
  return {
    type: GET_AUTH_SUCCESS,
    payload: data,
  };
};

const getAuthFailure = () => {
  return {
    type: GET_AUTH_FAILURE,
  };
};

//Register
export const postAuth = (data) => (dispatch) => {
  dispatch(postAuthRequest());
  return axios({
    url: "http://localhost:7777/signup",
    method: "POST",
    data,
  })
    .then((res) => {
      dispatch(postAuthSuccess(res.data));
    })
    .catch((err) => {
      dispatch(postAuthFailure(err));
    });
};

//Login
export const getAuth = (data) => (dispatch) => {
  dispatch(getAuthRequest());
  return axios({
    url: "http://localhost:7777/signin",
    method: "POST",
    data,
  })
    .then((res) => {
      dispatch(getAuthSuccess(res.data));

      if (Object.keys(res.data).length > 0) {
        let data = {
          email: res.data.email,
          userId: res.data.userId,
          username: res.data.username,
        };
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem("userData", JSON.stringify(data));
      }
    })
    .catch((err) => {
      dispatch(getAuthFailure(err));
    });
};
