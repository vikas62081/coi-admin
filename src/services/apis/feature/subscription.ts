import mock from '../MockConfig';
import { AxiosRequestConfig } from "axios";
import SubscriptionData from '../../db/apps/feature/subscriptionList';
import { Subscription } from '../../../types/models/apps/feature';

let subscriptionList = SubscriptionData;

const subscriptionUri = 'api/v1/feature-management/subscriptions';
const serviceUrl = new RegExp(`${subscriptionUri}/*`);

// Define all mocks of subscription

// GET
mock.onGet(subscriptionUri).reply((request: AxiosRequestConfig) => {
  return [200, subscriptionList];
});

// GET/{ID}
mock.onGet(serviceUrl).reply((request: AxiosRequestConfig) => {
    const { url } = request;
    var id = url?.substring(url?.lastIndexOf('/') + 1);
    const result = subscriptionList.find((subscription) => subscription.id === parseInt(id != null ? id : ''));

    if(result){
      return [200, result];
    }else{
      return [404]
    }
  });

// POST
mock.onPost(subscriptionUri).reply((request: AxiosRequestConfig) => {
    const subscription = JSON.parse(request.data);

    var result = [subscription, ...subscriptionList] as Subscription[];

    subscriptionList = result;
    return [200, subscription];
});

// PUT
mock.onPut(serviceUrl).reply((request: AxiosRequestConfig) => {
  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  const subscription = JSON.parse(request.data) as Subscription;

  var result = subscriptionList.map((item) =>
      item.id === parseInt(id != null ? id : '') ? subscription : item
  );

  subscriptionList = result;

  return [200, subscription];
});

mock.onDelete(serviceUrl).reply((request: AxiosRequestConfig) => {

  const { url } = request;
  var id = url?.substring(url?.lastIndexOf('/') + 1);

  var result = subscriptionList.filter((item) => item.id != parseInt(id != null ? id : ''));
  subscriptionList = result;

  return [200];
});
