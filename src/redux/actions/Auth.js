import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  SIGNIN_USER_ERROR,
} from "../../constants/ActionTypes";
import * as APIs from "../../constants/APIs";
import APICaller from "../../utils/APICaller";

export const userSignIn = (data) => async (dispatch) => {
  APICaller.execute(APIs.SIGNIN, {
    data: { email: data.email, password: data.password },
  })
    .then((response) => {
      // if the login was succesful, then
      // we dispatch to our reducers the fact that
      // login was succesful by sending true
      if (response) {
        localStorage.setItem("user_id", JSON.stringify(response));
        dispatch({ type: SIGNIN_USER_SUCCESS, payload: response });
      }
    })
    .catch((error) => {
      localStorage.removeItem("user_id");
      dispatch({ type: SIGNIN_USER_ERROR, payload: null });
    });
};

export const userSignOut = () => async (dispatch) => {
  localStorage.removeItem("user_id");
  dispatch({ type: SIGNOUT_USER_SUCCESS });
};

export const userSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser,
  };
};

export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  };
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};

export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};
