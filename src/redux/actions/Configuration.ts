import { Dispatch } from "redux";
import jwtAxios from "../../services/auth/jwt-auth";
import { ConfigurationService } from "../../services/ConfigurationService";
import { AppActions } from "../../types";
import {
  GET_CONFIGURATIONS,
  CREATE_CONFIGURATION,
  UPDATE_CONFIGURATION,
  DELETE_CONFIGURATION,
} from "../../types/actions/Configuration.action";
import { Configuration } from "../../types/models/apps/configuration";
import { fetchError, fetchStart, fetchSuccess } from "./Common";

const configurationService = new ConfigurationService();

// export const getConfigurations = () => {
//     return (dispatch: Dispatch<AppActions>) => {
//         dispatch(fetchStart());
//         configurationService
//             .fetchAll()
//             .then((data) => {
//                 if (data.status === 200) {
//                     dispatch({ type: GET_CONFIGURATIONS, payload: data.data });
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
export const getConfigurations = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .get("api/v1/configuration_entry")
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: GET_CONFIGURATIONS, payload: request.data });
          return dispatch(fetchSuccess("fetch success"));
        } else {
          dispatch(fetchError("Something went wrong, Please try again!"));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const createConfiguration = (configuration: Configuration) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .post("api/v1/configuration_entry", configuration)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: CREATE_CONFIGURATION, payload: request.data });
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

export const updateConfiguration = (configuration: Configuration) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .put(
        `api/v1/configuration_entry/${configuration.configuration_id}`,
        configuration,
      )
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: UPDATE_CONFIGURATION, payload: request.data });
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

export const deleteConfiguration = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    jwtAxios
      .delete(`api/v1/configuration_entry/${id}`)
      .then((request) => {
        if (request.status === 200) {
          dispatch({ type: DELETE_CONFIGURATION, payload: id });
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
