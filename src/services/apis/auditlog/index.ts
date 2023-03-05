import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import auditlogData from '../../db/apps/auditlog/auditlogList';
import { Auditlog } from '../../../types/models/apps/auditlog';

let auditlogList = auditlogData;

const auditlogUri = 'api/v1/auditlog';
const serviceUrl = new RegExp(`${auditlogUri}/*`);

// Define all mocks of auditlog

// GET
mock.onGet(auditlogUri).reply((request: AxiosRequestConfig) => {
  return [200, auditlogList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = auditlogList.find((auditlog) => auditlog.auditlog_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(auditlogUri).reply((request: AxiosRequestConfig) => {
    const auditlog = JSON.parse(request.data);

    var result = [auditlog, ...auditlogList] as Auditlog[];

    auditlogList = result;
    return [200, auditlog];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const auditlog = JSON.parse(request.data) as Auditlog;

  var result = auditlogList.map((item) =>
      item.auditlog_id === parseInt(id != null ? id : '') ? auditlog : item
  );

  auditlogList = result;

  return [200, auditlog];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = auditlogList.filter((item) => item.auditlog_id != parseInt(id != null ? id : ''));
  auditlogList = result;

  return [200];
});
