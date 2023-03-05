import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import permissionRoleData from '../../db/apps/permission/permissionRoleList';
import { PermissionRoleGrant } from '../../../types/models/apps/permission';

let permissionRoleList = permissionRoleData;

const permissionGroupUri = 'api/v1/permission-management/role_permissions_grant';
const serviceUrl = new RegExp(`${permissionGroupUri}/*`);

// Define all mocks of permissionRole

// GET
mock.onGet(permissionGroupUri).reply((request: AxiosRequestConfig) => {
  return [200, permissionRoleList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = permissionRoleList.find((permissionGroup) => permissionGroup.permission_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(permissionGroupUri).reply((request: AxiosRequestConfig) => {
    const permissionGroup = JSON.parse(request.data);

    var result = [permissionGroup, ...permissionRoleList] as PermissionRoleGrant[];

    permissionRoleList = result;
    return [200, permissionGroup];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const permissionGroup = JSON.parse(request.data) as PermissionRoleGrant;

  var result = permissionRoleList.map((item) =>
      item.permission_id === parseInt(id != null ? id : '') ? permissionGroup : item
  );

  permissionRoleList = result;

  return [200, permissionGroup];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = permissionRoleList.filter((item) => item.permission_id != parseInt(id != null ? id : ''));
  permissionRoleList = result;

  return [200];
});
