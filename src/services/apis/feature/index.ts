import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import featureData from '../../db/apps/feature/featureList';
import { Feature } from '../../../types/models/apps/feature';

let featureList = featureData;

const featureUri = 'api/v1/feature-management/features';
const serviceUrl = new RegExp(`${featureUri}/*`);

// Define all mocks of feature

// GET
mock.onGet(featureUri).reply((request: AxiosRequestConfig) => {
  return [200, featureList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = featureList.find((feature) => feature.feature_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(featureUri).reply((request: AxiosRequestConfig) => {
    const feature = JSON.parse(request.data);

    var result = [feature, ...featureList] as Feature[];

    featureList = result;
    return [200, feature];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const feature = JSON.parse(request.data) as Feature;

  var result = featureList.map((item) =>
      item.feature_id === parseInt(id != null ? id : '') ? feature : item
  );

  featureList = result;

  return [200, feature];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = featureList.filter((item) => item.feature_id != parseInt(id != null ? id : ''));
  featureList = result;

  return [200];
});
