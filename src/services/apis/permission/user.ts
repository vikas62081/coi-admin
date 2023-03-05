import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import permissionUserData from '../../db/apps/permission/permissionRoleList';
import { PermissionUserGrant } from '../../../types/models/apps/permission';

let permissionUserList = permissionUserData;

const permissionUserUri = 'api/v1/permission-management/user_permissions_grant';
const serviceUrl = new RegExp(`${permissionUserUri}/*`);

// Define all mocks of permissionUser

// GET
mock.onGet(permissionUserUri).reply((request: AxiosRequestConfig) => {
  return [200, permissionUserList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = permissionUserList.find((permissionUser) => permissionUser.permission_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(permissionUserUri).reply((request: AxiosRequestConfig) => {
    const permissionUser = JSON.parse(request.data);

    var result = [permissionUser, ...permissionUserList] as PermissionUserGrant[];

    permissionUserList = result;
    return [200, permissionUser];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const permissionUser = JSON.parse(request.data) as PermissionUserGrant;

  var result = permissionUserList.map((item) =>
      item.permission_id === parseInt(id != null ? id : '') ? permissionUser : item
  );

  permissionUserList = result;

  return [200, permissionUser];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = permissionUserList.filter((item) => item.permission_id != parseInt(id != null ? id : ''));
  permissionUserList = result;

  return [200];
});
