import { Common } from "../../types/models/apps/Common";

import {
    CommonActionTypes,
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    HIDE_MESSAGE,
    SHOW_MESSAGE,
    TOGGLE_APP_DRAWER,
    START_CREATE,
    END_CREATE
} from "../../types/actions/Common.action";

const INIT_STATE: Common = {
    start: false,
    end: true,
    error: "",
    loading: false,
    isAppDrawerOpen: false,
    updatingContent: false,
    message: "",
};

const CommonReducer = (
    state = INIT_STATE,
    action: CommonActionTypes
): Common => {

    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                error: "",
                message: "",
                loading: true,
            };
        }

        case FETCH_SUCCESS: {
            return {
                ...state,
                error: "",
                message: action.message,
                loading: false,
                updatingContent: false,
            };
        }
        case SHOW_MESSAGE: {
            return {
                ...state,
                error: "",
                message: action.message,
                loading: false,
                updatingContent: false,
            };
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
                message: "",
                updatingContent: false,
            };
        }
        case HIDE_MESSAGE: {
            return {
                ...state,
                loading: false,
                error: "",
                message: "",
                updatingContent: false,
            };
        }
        case TOGGLE_APP_DRAWER: {
            return {
                ...state,
                isAppDrawerOpen: !state.isAppDrawerOpen,
            };
        }

        case START_CREATE: {
            return {
                ...state,
                loading: true,
                start: true,
                end: false
            }
        }

        case END_CREATE: {
            return {
                ...state,
                loading: false,
                start: false,
                end: true
            }
        }

        default:
            return state;
    }
};
export default CommonReducer;
