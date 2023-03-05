import { Configuration } from "../models/apps/configuration";

export const GET_CONFIGURATIONS = "GET_CONFIGURATIONS";
export const CREATE_CONFIGURATION = "CREATE_CONFIGURATION";
export const UPDATE_CONFIGURATION = "UPDATE_CONFIGURATION";
export const DELETE_CONFIGURATION = "DELETE_CONFIGURATION";

export interface GetConfigurationsAction {
    type: typeof GET_CONFIGURATIONS;
    payload: Configuration[];
}

export interface CreateConfigurationsAction {
    type: typeof CREATE_CONFIGURATION;
    payload: Configuration;
}

export interface UpdateConfigurationAction {
    type: typeof UPDATE_CONFIGURATION;
    payload: Configuration;
}

export interface DeleteConfigurationAction {
    type: typeof DELETE_CONFIGURATION;
    payload: string;
}

export type ConfigurationActionTypes =
    | GetConfigurationsAction
    | CreateConfigurationsAction
    | UpdateConfigurationAction
    | DeleteConfigurationAction;
