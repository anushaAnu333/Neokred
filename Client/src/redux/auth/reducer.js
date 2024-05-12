import {
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  POST_AUTH_FAILURE,
  POST_AUTH_REQUEST,
  POST_AUTH_SUCCESS,
} from "./action";

const initState = {
  isLoading: false,
  isError: false,
  signIn: {},
  signUp: {},
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signIn: action.payload,
      };
    case GET_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case POST_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signUp: action.payload,
      };
    case POST_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
