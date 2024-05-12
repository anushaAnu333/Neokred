import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from "./action";

const initState = {
  isLoading: false,
  isError: false,
  profile: {},
  refresh: "",
};

export const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        profile: action.payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        refresh: action.payload,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
