import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import permissionData from '../../db/apps/permission/permissionList';
import { Permission } from '../../../types/models/apps/permission';

let permissionList = permissionData;

const permissionUri = 'api/v1/permission-management/permissions';
const serviceUrl = new RegExp(`${permissionUri}/*`);

// Define all mocks of permission

// GET
mock.onGet(permissionUri).reply((request: AxiosRequestConfig) => {
  return [200, permissionList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = permissionList.find((permission) => permission.permission_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(permissionUri).reply((request: AxiosRequestConfig) => {
    const permission = JSON.parse(request.data);

    var result = [permission, ...permissionList] as Permission[];

    permissionList = result;
    return [200, permission];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const permission = JSON.parse(request.data) as Permission;

  var result = permissionList.map((item) =>
      item.permission_id === parseInt(id != null ? id : '') ? permission : item
  );

  permissionList = result;

  return [200, permission];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = permissionList.filter((item) => item.permission_id != parseInt(id != null ? id : ''));
  permissionList = result;

  return [200];
});
