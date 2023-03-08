import {
  CommonActionTypes,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
  START_CREATE,
  END_CREATE,
} from "../../types/actions/Common.action";

export const fetchStart = (): CommonActionTypes => ({ type: FETCH_START });

export const fetchSuccess = (message: string): CommonActionTypes => ({
  type: FETCH_SUCCESS,
  message,
});

export const fetchError = (error: string): CommonActionTypes => ({
  type: FETCH_ERROR,
  error,
});

export const showMessage = (message: string): CommonActionTypes => ({
  type: SHOW_MESSAGE,
  message,
});

export const onToggleAppDrawer = (): CommonActionTypes => ({
  type: TOGGLE_APP_DRAWER,
});

export const hideMessage = (): CommonActionTypes => ({ type: HIDE_MESSAGE });

export const startCreate = (): CommonActionTypes => ({ type: START_CREATE });

export const endCreate = (): CommonActionTypes => ({ type: END_CREATE });
