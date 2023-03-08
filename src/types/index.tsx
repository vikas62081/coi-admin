import { CommonActionTypes } from "./actions/Common.action";
import { ConfigurationActionTypes } from "./actions/Configuration.action";
import { IdentityActionTypes } from "./actions/Identity.action";
import { TenantActionTypes } from "./actions/Tenant.action";

export type AppActions =
  | CommonActionTypes
  | ConfigurationActionTypes
  | TenantActionTypes
  | IdentityActionTypes;
