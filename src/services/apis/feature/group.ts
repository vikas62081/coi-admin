import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import featureGroupData from '../../db/apps/feature/featureGroupList';
import { FeatureGroup } from '../../../types/models/apps/feature';

let featureGroupList = featureGroupData;

const featureGroupUri = 'api/v1/feature-management/features/groups';
const serviceUrl = new RegExp(`${featureGroupUri}/*`);

// Define all mocks of feature - group

// GET
mock.onGet(featureGroupUri).reply((request: AxiosRequestConfig) => {
  return [200, featureGroupList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = featureGroupList.find((feature) => feature.feature_group_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(featureGroupUri).reply((request: AxiosRequestConfig) => {
    const feature = JSON.parse(request.data);

    var result = [feature, ...featureGroupList] as FeatureGroup[];

    featureGroupList = result;
    return [200, feature];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const feature = JSON.parse(request.data) as FeatureGroup;

  var result = featureGroupList.map((item) =>
      item.feature_group_id === parseInt(id != null ? id : '') ? feature : item
  );

  featureGroupList = result;

  return [200, feature];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = featureGroupList.filter((item) => item.feature_group_id != parseInt(id != null ? id : ''));
  featureGroupList = result;

  return [200];
});
