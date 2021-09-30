import axios from "axios";
import { alert, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

import {
  signupUser,
  loginUserService,
  logOutUserService,
  refreshUserService,
} from "../../service";

import {
  signupUserRequest,
  signupUserSucces,
  signupUserError,
  loginUserRequest,
  loginUserSucces,
  loginUserError,
  logoutUserRequest,
  logoutUserSucces,
  logoutUserError,
  refreshUserRequest,
  refreshUserSucces,
  refreshUserError,
} from "./userAction";

defaultModules.set(PNotifyMobile, {});

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = (value) => async (dispatch) => {
  dispatch(signupUserRequest());

  try {
    const response = await signupUser(value);
    token.set(response.token);
    dispatch(signupUserSucces(response));
    alert({
      text: "Register success",
    });
  } catch (error) {
    dispatch(signupUserError(error.message));
    console.log(error, 'errr');
    alert({
      text: error.message,
    });
  }
};

export const loginUser = (value) => async (dispatch) => {
  dispatch(loginUserRequest());

  try {
    const response = await loginUserService(value);
    token.set(response.data.token);
    dispatch(loginUserSucces(response.data));
    alert({
      text: "Login success",
    });
  } catch (error) {
    dispatch(loginUserError(error.message));

    alert({
      text: error.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(logoutUserRequest());
  try {
    await logOutUserService();
    token.unset();
    dispatch(logoutUserSucces());
    alert({
      text: "Logout success",
    });
  } catch (error) {
    dispatch(logoutUserError(error.message));
    alert({
      text: error.message,
    });
  }
};

export const refreshUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(refreshUserRequest());

  try {
    const response = await refreshUserService();
    dispatch(refreshUserSucces(response.data));
  } catch (error) {
    localStorage.removeItem('persist:token')
    token.unset()
    dispatch(refreshUserError(error.message));
    alert({
      text: error.message,
    });
  }
};
