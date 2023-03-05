import { Tenant } from "../models/apps/tenant";

export const GET_TENANTS = "GET_TENANTS";
export const CREATE_TENANT = "CREATE_TENANT";
export const UPDATE_TENANT = "UPDATE_TENANT";
export const DELETE_TENANT = "DELETE_TENANT";

export interface GetTenantsAction {
    type: typeof GET_TENANTS;
    payload: Tenant[];
}

export interface CreateTenantsAction {
    type: typeof CREATE_TENANT;
    payload: Tenant;
}

export interface UpdateTenantAction {
    type: typeof UPDATE_TENANT;
    payload: Tenant;
}

export interface DeleteTenantAction {
    type: typeof DELETE_TENANT;
    payload: string;
}

export type TenantActionTypes =
    | GetTenantsAction
    | CreateTenantsAction
    | UpdateTenantAction
    | DeleteTenantAction;
