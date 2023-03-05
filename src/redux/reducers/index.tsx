import Common from "./Common";
import ConfigurationReducer from "./Configuration";
import TenantReducer from "./Tenant";

const reducers = {
    common: Common,
    configuration: ConfigurationReducer,
    tenant: TenantReducer
};

export default reducers;
