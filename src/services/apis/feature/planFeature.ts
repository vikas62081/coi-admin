import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import PlanFeatureData from '../../db/apps/feature/planFeatureList';
import { PlanFeature } from '../../../types/models/apps/feature';

let planFeatureList = PlanFeatureData;

const planFeatureUri = 'api/v1/feature-management/plan_feature';
const serviceUrl = new RegExp(`${planFeatureUri}/*`);

// Define all mocks of plan - feature

// GET
mock.onGet(planFeatureUri).reply((request: AxiosRequestConfig) => {
  return [200, planFeatureList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = planFeatureList.find((plan) => plan.id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(planFeatureUri).reply((request: AxiosRequestConfig) => {
    const plan = JSON.parse(request.data);

    var result = [plan, ...planFeatureList] as PlanFeature[];

    planFeatureList = result;
    return [200, plan];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const plan = JSON.parse(request.data) as PlanFeature;

  var result = planFeatureList.map((item) =>
      item.id === parseInt(id != null ? id : '') ? plan : item
  );

  planFeatureList = result;

  return [200, plan];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = planFeatureList.filter((item) => item.id != parseInt(id != null ? id : ''));
  planFeatureList = result;

  return [200];
});
