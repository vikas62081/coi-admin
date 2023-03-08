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
  IdentityActionTypes,
  UPDATE_IDENTITY_ROLES,
  UPDATE_IDENTITY_USERS,
  UPDATE_IDENTITY_USERS_ROlES,
} from "../../types/actions/Identity.action";

const initialState: {
  userList: any[];
  roleList: any[];
  userRoleList: any[];
} = {
  userList: [],
  roleList: [],
  userRoleList: [],
};

const IdentityReducer = (state = initialState, action: IdentityActionTypes) => {
  switch (action.type) {
    case GET_IDENTITY_USERS:
      return {
        ...state,
        userList: action.payload,
      };

    case CREATE_IDENTITY_USERS:
      return {
        ...state,
        userList: [action.payload, ...state.userList],
      };

    case UPDATE_IDENTITY_USERS:
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.user_id === action.payload.user_id ? action.payload : user,
        ),
      };

    case DELETE_IDENTITY_USERS:
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.user_id !== action.payload,
        ),
      };
    //Roles
    case GET_IDENTITY_ROLES:
      return {
        ...state,
        roleList: action.payload,
      };

    case CREATE_IDENTITY_ROLES:
      return {
        ...state,
        roleList: [action.payload, ...state.roleList],
      };

    case UPDATE_IDENTITY_ROLES:
      return {
        ...state,
        roleList: state.roleList.map((role) =>
          role.role_id === action.payload.role_id ? action.payload : role,
        ),
      };

    case DELETE_IDENTITY_ROLES:
      return {
        ...state,
        roleList: state.roleList.filter(
          (role) => role.role_id !== action.payload,
        ),
      };

    ///user roles
    case GET_IDENTITY_USER_ROlES:
      return {
        ...state,
        userRoleList: action.payload,
      };

    case CREATE_IDENTITY_USERS_ROlES:
      return {
        ...state,
        userRoleList: [action.payload, ...state.userRoleList],
      };

    case UPDATE_IDENTITY_USERS_ROlES:
      return {
        ...state,
        userRoleList: state.userRoleList.map((userRole) =>
          userRole.user_role_id === action.payload.user_role_id
            ? action.payload
            : userRole,
        ),
      };

    case DELETE_IDENTITY_USERS_ROlES:
      return {
        ...state,
        userRoleList: state.userRoleList.filter(
          (userRole) => userRole.user_role_id !== action.payload,
        ),
      };

    default:
      return state;
  }
};
export default IdentityReducer;
