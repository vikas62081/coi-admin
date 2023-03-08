import { Tenant } from "../models/apps/tenant";

export const GET_IDENTITY_USERS = "GET_IDENTITY_USERS";
export const CREATE_IDENTITY_USERS = "CREATE_IDENTITY_USERS";
export const UPDATE_IDENTITY_USERS = "UPDATE_IDENTITY_USERS";
export const DELETE_IDENTITY_USERS = "DELETE_IDENTITY_USERS";

export const GET_IDENTITY_ROLES = "GET_IDENTITY_ROLES";
export const CREATE_IDENTITY_ROLES = "CREATE_IDENTITY_ROLES";
export const UPDATE_IDENTITY_ROLES = "UPDATE_IDENTITY_ROLES";
export const DELETE_IDENTITY_ROLES = "DELETE_IDENTITY_ROLES";

export const GET_IDENTITY_USER_ROlES = "GET_IDENTITY_USER_ROlES";
export const CREATE_IDENTITY_USERS_ROlES = "CREATE_IDENTITY_USERS_ROlES";
export const UPDATE_IDENTITY_USERS_ROlES = "UPDATE_IDENTITY_USERS_ROlES";
export const DELETE_IDENTITY_USERS_ROlES = "DELETE_IDENTITY_USERS_ROlES";

export interface GetIdentityUsersAction {
  type: typeof GET_IDENTITY_USERS;
  payload: any[];
}

export interface CreateIdentityUsersAction {
  type: typeof CREATE_IDENTITY_USERS;
  payload: any;
}

export interface UpdateIdentityUsersAction {
  type: typeof UPDATE_IDENTITY_USERS;
  payload: any;
}

export interface DeleteIdentityUsersAction {
  type: typeof DELETE_IDENTITY_USERS;
  payload: string;
}

export interface GetIdentityRolesAction {
  type: typeof GET_IDENTITY_ROLES;
  payload: any[];
}

export interface CreateIdentityRolesAction {
  type: typeof CREATE_IDENTITY_ROLES;
  payload: any;
}

export interface UpdateIdentityRolesAction {
  type: typeof UPDATE_IDENTITY_ROLES;
  payload: any;
}

export interface DeleteIdentityRolesAction {
  type: typeof DELETE_IDENTITY_ROLES;
  payload: string;
}

export interface GetIdentityUserRolesAction {
  type: typeof GET_IDENTITY_USER_ROlES;
  payload: any[];
}

export interface CreateIdentityUserRolesAction {
  type: typeof CREATE_IDENTITY_USERS_ROlES;
  payload: any;
}

export interface UpdateIdentityUserRolesAction {
  type: typeof UPDATE_IDENTITY_USERS_ROlES;
  payload: any;
}

export interface DeleteIdentityUserRolesAction {
  type: typeof DELETE_IDENTITY_USERS_ROlES;
  payload: string;
}

export type IdentityActionTypes =
  | GetIdentityUsersAction
  | CreateIdentityUsersAction
  | UpdateIdentityUsersAction
  | DeleteIdentityUsersAction
  | GetIdentityRolesAction
  | CreateIdentityRolesAction
  | UpdateIdentityRolesAction
  | DeleteIdentityRolesAction
  | GetIdentityUserRolesAction
  | CreateIdentityUserRolesAction
  | UpdateIdentityUserRolesAction
  | DeleteIdentityUserRolesAction;
