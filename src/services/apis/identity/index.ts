import mock from "../MockConfig";
import { AxiosRequestConfig } from "axios";
import userList from "../../db/apps/identity/userList";
import roleList from "../../db/apps/identity/roleList";
import userRoleList from "../../db/apps/identity/userToRole";
let users = userList;
let roles = roleList;
let userRoles = userRoleList;

const identityUsersUri = "api/v1/identity-management/users";
const serviceUsersUrl = new RegExp(`${identityUsersUri}/*`);

const identityRolesUri = "api/v1/identity-management/roles";
const serviceRolesUrl = new RegExp(`${identityRolesUri}/*`);

const identityUserRolesUri = "api/v1/identity-management/user-roles";
const serviceUserRolesUrl = new RegExp(`${identityUserRolesUri}/*`);

// Define all mocks of tenant

// GET
mock.onGet(identityUsersUri).reply((request: AxiosRequestConfig) => {
  return [200, users];
});

// GET/{ID}
mock.onGet(serviceUsersUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);
  const result = users.find((user: any) => user.user_id === id);

  if (result) {
    return [200, result];
  } else {
    return [404];
  }
});

// POST
mock.onPost(identityUsersUri).reply((request: AxiosRequestConfig) => {
  const identity = JSON.parse(request.data);

  var result = [identity, ...users] as any[];

  users = result;
  return [200, identity];
});

// PUT
mock.onPut(serviceUsersUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);

  const identity = JSON.parse(request.data) as any;

  var result = users.map((item: any) =>
    item.user_id === id ? identity : item,
  );
  users = result;

  return [200, identity];
});

mock.onDelete(serviceUsersUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);

  var result = users.filter((item: any) => item.user_id != id);
  users = result;

  return [200];
});

//Roles

// GET
mock.onGet(identityRolesUri).reply((request: AxiosRequestConfig) => {
  return [200, roles];
});

// GET/{ID}
mock.onGet(serviceRolesUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);
  const result = roles.find((role: any) => role.role_id === id);

  if (result) {
    return [200, result];
  } else {
    return [404];
  }
});

// POST
mock.onPost(identityRolesUri).reply((request: AxiosRequestConfig) => {
  const role = JSON.parse(request.data);
  var result = [role, ...roles] as any[];
  roles = result;
  return [200, role];
});

// PUT
mock.onPut(serviceRolesUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);

  const role = JSON.parse(request.data) as any;

  var result = roles.map((role: any) => (role.role_id === id ? role : role));

  roles = result;

  return [200, role];
});

mock.onDelete(serviceRolesUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);

  var result = roles.filter((role: any) => role.user_id != id);
  roles = result;

  return [200];
});

//Users roles

// GET
mock.onGet(identityUserRolesUri).reply((request: AxiosRequestConfig) => {
  return [200, userRoles];
});

// GET/{ID}
mock.onGet(serviceUserRolesUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);
  const result = userRoles.find(
    (userRole: any) => userRole.user_role_id === id,
  );

  if (result) {
    return [200, result];
  } else {
    return [404];
  }
});

// POST
mock.onPost(identityUserRolesUri).reply((request: AxiosRequestConfig) => {
  const userRole = JSON.parse(request.data);

  var result = [userRole, ...userRoles] as any[];

  userRoles = result;
  return [200, userRole];
});

// PUT
mock.onPut(serviceUserRolesUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);

  const userRole = JSON.parse(request.data) as any;

  var result = userRoles.map((item: any) =>
    item.user_role_id === id ? userRole : item,
  );
  userRoles = result;

  return [200, userRole];
});

mock.onDelete(serviceUserRolesUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf("/") + 1);

  var result = userRoles.filter((item: any) => item.user_role_id != id);
  userRoles = result;
  return [200];
});
