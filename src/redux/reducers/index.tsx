import Common from "./Common";
import ConfigurationReducer from "./Configuration";
import IdentityReducer from "./Identity";
import TenantReducer from "./Tenant";

const reducers = {
  common: Common,
  configuration: ConfigurationReducer,
  tenant: TenantReducer,
  identity: IdentityReducer,
};

export default reducers;
