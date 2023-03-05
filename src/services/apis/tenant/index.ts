import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import tenantData from '../../db/apps/tenant/tenantList';
import { Tenant } from '../../../types/models/apps/tenant';

let tenantList = tenantData;

const tenantUri = 'api/v1/tenant-management/tenants';
const serviceUrl = new RegExp(`${tenantUri}/*`);

// Define all mocks of tenant

// GET
mock.onGet(tenantUri).reply((request: AxiosRequestConfig) => {
  return [200, tenantList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = tenantList.find((tenant) => tenant.tenant_id === id);

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(tenantUri).reply((request: AxiosRequestConfig) => {
    const tenant = JSON.parse(request.data);

    var result = [tenant, ...tenantList] as Tenant[];

    tenantList = result;
    return [200, tenant];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const tenant = JSON.parse(request.data) as Tenant;

  var result = tenantList.map((item) =>
      item.tenant_id === id ? tenant : item
  );

  tenantList = result;

  return [200, tenant];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = tenantList.filter((item) => item.tenant_id != id);
  tenantList = result;

  return [200];
});
