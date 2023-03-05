import { CommonActionTypes } from "./actions/Common.action";
import { ConfigurationActionTypes } from "./actions/Configuration.action";
import { TenantActionTypes } from "./actions/Tenant.action";

export type AppActions =
    | CommonActionTypes
    | ConfigurationActionTypes
    | TenantActionTypes;
