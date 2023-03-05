// action strings
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const TOGGLE_APP_DRAWER = 'TOGGLE_APP_DRAWER';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const START_CREATE = 'START_CREATE';
export const END_CREATE = 'END_CREATE';

export interface FetchStartAction {
    type: typeof FETCH_START;
}

export interface FetchSuccessAction {
    type: typeof FETCH_SUCCESS;
    message: string;
}

export interface FetchErrorAction {
    type: typeof FETCH_ERROR;
    error: string;
}

export interface ShowMessageAction {
    type: typeof SHOW_MESSAGE;
    message: string;
}

export interface ToggleDrawerAction {
    type: typeof TOGGLE_APP_DRAWER;
}

export interface HideMessageAction {
    type: typeof HIDE_MESSAGE;
}
export interface StartCreateAction {
    type: typeof START_CREATE;
}

export interface EndCreateAction {
    type: typeof END_CREATE;
}

export type CommonActionTypes =
    | FetchStartAction
    | FetchSuccessAction
    | FetchErrorAction
    | ShowMessageAction
    | ToggleDrawerAction
    | HideMessageAction
    | StartCreateAction
    | EndCreateAction
