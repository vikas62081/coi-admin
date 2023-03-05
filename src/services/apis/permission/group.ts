import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import permissionGroupData from '../../db/apps/permission/permissionGroupList';
import { PermissionGroup } from '../../../types/models/apps/permission';

let permissionGroupList = permissionGroupData;

const permissionGroupUri = 'api/v1/permission-management/permission_group';
const serviceUrl = new RegExp(`${permissionGroupUri}/*`);

// Define all mocks of permissionGroup

// GET
mock.onGet(permissionGroupUri).reply((request: AxiosRequestConfig) => {
  return [200, permissionGroupList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = permissionGroupList.find((permissionGroup) => permissionGroup.permission_group_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(permissionGroupUri).reply((request: AxiosRequestConfig) => {
    const permissionGroup = JSON.parse(request.data);

    var result = [permissionGroup, ...permissionGroupList] as PermissionGroup[];

    permissionGroupList = result;
    return [200, permissionGroup];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const permissionGroup = JSON.parse(request.data) as PermissionGroup;

  var result = permissionGroupList.map((item) =>
      item.permission_group_id === parseInt(id != null ? id : '') ? permissionGroup : item
  );

  permissionGroupList = result;

  return [200, permissionGroup];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = permissionGroupList.filter((item) => item.permission_group_id != parseInt(id != null ? id : ''));
  permissionGroupList = result;

  return [200];
});
