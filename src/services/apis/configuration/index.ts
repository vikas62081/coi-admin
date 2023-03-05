import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import configurationData from '../../db/apps/configuration/configurationList';
import { Configuration } from '../../../types/models/apps/configuration';

let configurationList = configurationData;

const configurationUri = 'api/v1/configuration_entry';
const serviceUrl = new RegExp(`${configurationUri}/*`);

// Define all mocks of configuration

// GET
mock.onGet(configurationUri).reply((request: AxiosRequestConfig) => {
  return [200, configurationList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = configurationList.find((configuration) => configuration.configuration_id === id);

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(configurationUri).reply((request: AxiosRequestConfig) => {
    const configuration = JSON.parse(request.data);

    var result = [configuration, ...configurationList] as Configuration[];

    configurationList = result;
    return [200, configuration];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const configuration = JSON.parse(request.data) as Configuration;

  var result = configurationList.map((item) =>
      item.configuration_id === id ? configuration : item
  );

  configurationList = result;

  return [200, configuration];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = configurationList.filter((item) => item.configuration_id != id);
  configurationList = result;

  return [200];
});
