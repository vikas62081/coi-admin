import { Configuration } from "../../types/models/apps/configuration";
import { AppActions } from "../../types";
import { ConfigurationActionTypes, GET_CONFIGURATIONS, CREATE_CONFIGURATION, UPDATE_CONFIGURATION, DELETE_CONFIGURATION } from "../../types/actions/Configuration.action";

const initialState: {
    configurationList: Configuration[]
} = {
    configurationList: []
};

const ConfigurationReducer = (state = initialState, action: ConfigurationActionTypes) => {
    switch (action.type) {
        case GET_CONFIGURATIONS:
            return {
                ...state,
                configurationList: action.payload,
            };

        case CREATE_CONFIGURATION:
            return {
                ...state,
                configurationList: [action.payload, ...state.configurationList],
            };

        case UPDATE_CONFIGURATION:
            return {
                ...state,
                configurationList: state.configurationList.map((configuration) =>
                    configuration.configuration_id === action.payload.configuration_id ? action.payload : configuration
                ),
            };

        case DELETE_CONFIGURATION:
            return {
                ...state,
                configurationList: state.configurationList.filter((configuration) => configuration.configuration_id !== action.payload
                ),
            };

        default:
            return state;
    }
};
export default ConfigurationReducer;
