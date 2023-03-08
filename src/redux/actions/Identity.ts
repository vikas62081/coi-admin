import { Dispatch } from "redux";
import jwtAxios from "../../services/auth/jwt-auth";
import { TenantService } from "../../services/TenantService";
import { AppActions } from "../../types";
import {
  CREATE_IDENTITY_ROLES,
  CREATE_IDENTITY_USERS,
  CREATE_IDENTITY_USERS_ROlES,
  DELETE_IDENTITY_ROLES,
  DELETE_IDENTITY_USERS,
  DELETE_IDENTITY_USERS_ROlES,
  GET_IDENTITY_ROLES,
  GET_IDENTITY_USERS,
  GET_IDENTITY_USER_ROlES,
  UPDATE_IDENTITY_ROLES,
  UPDATE_IDENTITY_USERS,
  UPDATE_IDENTITY_USERS_ROlES,
} from "../../types/actions/Identity.action";

import { Tenant } from "../../types/models/apps/tenant";
import { fetchError, fetchStart, fetchSuccess } from "./Common";

// using the mock service
export const getIdentityUsers = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .get("api/v1/identity-management/users")
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: GET_IDENTITY_USERS, payload: request.data });
          dispatch(fetchSuccess("fetch success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const createIdentityUsers = (user: Tenant) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post("api/v1/identity-management/users", user)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: CREATE_IDENTITY_USERS, payload: request.data });
          dispatch(fetchSuccess("create success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const updateIdentityUsers = (user: any) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put(`api/v1/identity-management/users/${user.user_id}`, user)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: UPDATE_IDENTITY_USERS, payload: request.data });
          dispatch(fetchSuccess("update success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const deleteIdentityUsers = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .delete(`api/v1/identity-management/users/${id}`)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: DELETE_IDENTITY_USERS, payload: id });
          dispatch(fetchSuccess("update success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

//Roles
export const getIdentityRoles = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .get("api/v1/identity-management/roles")
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: GET_IDENTITY_ROLES, payload: request.data });
          dispatch(fetchSuccess("fetch success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const createIdentityRoles = (role: any) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post("api/v1/identity-management/roles", role)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: CREATE_IDENTITY_ROLES, payload: request.data });
          dispatch(fetchSuccess("create success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const updateIdentityRoles = (role: any) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put(`api/v1/identity-management/roles/${role?.role_id}`, role)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: UPDATE_IDENTITY_ROLES, payload: request.data });
          dispatch(fetchSuccess("update success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const deleteIdentityRoles = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .delete(`api/v1/identity-management/roles/${id}`)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: DELETE_IDENTITY_ROLES, payload: id });
          dispatch(fetchSuccess("update success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

/// user roles
export const getIdentityUserRoles = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .get("api/v1/identity-management/user-roles")
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: GET_IDENTITY_USER_ROlES, payload: request.data });
          dispatch(fetchSuccess("fetch success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const createIdentityUserRoles = (user: any) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post("api/v1/identity-management/user-roles", user)
      .then((request) => {
        if (request.status === 200) {
          dispatch({
            type: CREATE_IDENTITY_USERS_ROlES,
            payload: request.data,
          });
          dispatch(fetchSuccess("create success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const updateIdentityUserRoles = (user: any) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put(`api/v1/identity-management/user-roles/${user.user_id}`, user)
      .then((request) => {
        if (request.status === 200) {
          dispatch({
            type: UPDATE_IDENTITY_USERS_ROlES,
            payload: request.data,
          });
          dispatch(fetchSuccess("update success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const deleteIdentityUserRoles = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .delete(`api/v1/identity-management/user-roles/${id}`)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: DELETE_IDENTITY_USERS_ROlES, payload: id });
          dispatch(fetchSuccess("update success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
