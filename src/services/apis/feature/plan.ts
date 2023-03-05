import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import PlanData from '../../db/apps/feature/planList';
import { Plan } from '../../../types/models/apps/feature';

let planList = PlanData;

const planUri = 'api/v1/feature-management/plans';
const serviceUrl = new RegExp(`${planUri}/*`);

// Define all mocks of plan

// GET
mock.onGet(planUri).reply((request: AxiosRequestConfig) => {
  return [200, planList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = planList.find((plan) => plan.plan_id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(planUri).reply((request: AxiosRequestConfig) => {
    const plan = JSON.parse(request.data);

    var result = [plan, ...planList] as Plan[];

    planList = result;
    return [200, plan];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const plan = JSON.parse(request.data) as Plan;

  var result = planList.map((item) =>
      item.plan_id === parseInt(id != null ? id : '') ? plan : item
  );

  planList = result;

  return [200, plan];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = planList.filter((item) => item.plan_id != parseInt(id != null ? id : ''));
  planList = result;

  return [200];
});
