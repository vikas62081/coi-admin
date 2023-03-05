import { Tenant } from "../../types/models/apps/tenant";
import { AppActions } from "../../types";
import { TenantActionTypes, GET_TENANTS, CREATE_TENANT, UPDATE_TENANT, DELETE_TENANT } from "../../types/actions/Tenant.action";

const initialState: {
    tenantList: Tenant[]
} = {
    tenantList: []
};

const TenantReducer = (state = initialState, action: TenantActionTypes) => {
    switch (action.type) {
        case GET_TENANTS:
            return {
                ...state,
                tenantList: action.payload,
            };

        case CREATE_TENANT:
            return {
                ...state,
                tenantList: [action.payload, ...state.tenantList],
            };

        case UPDATE_TENANT:
            return {
                ...state,
                tenantList: state.tenantList.map((tenant) =>
                    tenant.tenant_id === action.payload.tenant_id ? action.payload : tenant
                ),
            };

        case DELETE_TENANT:
            return {
                ...state,
                tenantList: state.tenantList.filter((tenant) => tenant.tenant_id !== action.payload
                ),
            };

        default:
            return state;
    }
};
export default TenantReducer;
