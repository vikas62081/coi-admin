import { Dispatch } from "redux";
import jwtAxios from "../../services/auth/jwt-auth";
import { TenantService } from "../../services/TenantService";
import { AppActions } from "../../types";
import { GET_TENANTS, CREATE_TENANT, UPDATE_TENANT, DELETE_TENANT } from "../../types/actions/Tenant.action";
import { Tenant } from "../../types/models/apps/tenant";
import { fetchError, fetchStart, fetchSuccess } from "./Common";

const tenantService = new TenantService();

// export const getTenants = () => {
//     return (dispatch: Dispatch<AppActions>) => {
//         dispatch(fetchStart());
//         tenantService
//             .fetchAll()
//             .then((data) => {
//                 if (data.status === 200) {
//                     dispatch({ type: GET_TENANTS, payload: data.data });
//                     dispatch(fetchSuccess("fetch success"));
//                 } else {
//                     dispatch(fetchError("Something went wrong, Please try again!"));
//                 }
//             })
//             .catch((error) => {
//                 dispatch(fetchError(error.message));
//             });
//     };
// };

// using the mock service
export const getTenants = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchStart());

        jwtAxios.get('api/v1/tenant-management/tenants').
                then((request) => {
                    if(request.status === 200){
                        dispatch({ type: GET_TENANTS, payload: request.data });
                        dispatch(fetchSuccess("fetch success"));
                    } else {
                        dispatch(fetchError("Something went wrong, Please try again!"));
                    }
                }).catch((error) => {
                    dispatch(fetchError(error.message));
                });
    };
};

export const createTenant = (tenant: Tenant) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchStart());

        jwtAxios.post('api/v1/tenant-management/tenants', tenant).
                then((request) => {
                    if(request.status === 200){
                        dispatch({ type: CREATE_TENANT, payload: request.data });
                        dispatch(fetchSuccess("create success"));
                    } else {
                        dispatch(fetchError("Something went wrong, Please try again!"));
                    }
                }).catch((error) => {
                    dispatch(fetchError(error.message));
                });
    };
};

export const updateTenant = (tenant: Tenant) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchStart());

        jwtAxios.put(`api/v1/tenant-management/tenants/${tenant.tenant_id}`, tenant).
                then((request) => {
                    if(request.status === 200){
                        dispatch({ type: UPDATE_TENANT, payload: request.data });
                        dispatch(fetchSuccess("update success"));
                    } else {
                        dispatch(fetchError("Something went wrong, Please try again!"));
                    }
                }).catch((error) => {
                    dispatch(fetchError(error.message));
                });
    };
};

export const deleteTenant = (id: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchStart());

        jwtAxios.delete(`api/v1/tenant-management/tenants/${id}`).
                then((request) => {
                    if(request.status === 200){
                        dispatch({ type: DELETE_TENANT, payload: id });
                        dispatch(fetchSuccess("update success"));
                    } else {
                        dispatch(fetchError("Something went wrong, Please try again!"));
                    }
                }).catch((error) => {
                    dispatch(fetchError(error.message));
                });
    };
};
