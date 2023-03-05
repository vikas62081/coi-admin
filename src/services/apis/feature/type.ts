import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import featureTypeData from '../../db/apps/feature/featureTypeList';
import { FeatureType } from '../../../types/models/apps/feature';

let featureTypeList = featureTypeData;

const featureTypeUri = 'api/v1/feature-management/features/types';
const serviceUrl = new RegExp(`${featureTypeUri}/*`);

// Define all mocks of feature

// GET
mock.onGet(featureTypeUri).reply((request: AxiosRequestConfig) => {
  return [200, featureTypeList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = featureTypeList.find((feature) => feature.feature_type_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(featureTypeUri).reply((request: AxiosRequestConfig) => {
    const feature = JSON.parse(request.data);

    var result = [feature, ...featureTypeList] as FeatureType[];

    featureTypeList = result;
    return [200, feature];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const feature = JSON.parse(request.data) as FeatureType;

  var result = featureTypeList.map((item) =>
      item.feature_type_id === parseInt(id != null ? id : '') ? feature : item
  );

  featureTypeList = result;

  return [200, feature];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = featureTypeList.filter((item) => item.feature_type_id != parseInt(id != null ? id : ''));
  featureTypeList = result;

  return [200];
});
