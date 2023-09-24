import axios from 'axios';
import queryString from 'query-string';
import { UserSubscriptionInterface, UserSubscriptionGetQueryInterface } from 'interfaces/user-subscription';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserSubscriptions = async (
  query?: UserSubscriptionGetQueryInterface,
): Promise<PaginatedInterface<UserSubscriptionInterface>> => {
  const response = await axios.get('/api/user-subscriptions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserSubscription = async (userSubscription: UserSubscriptionInterface) => {
  const response = await axios.post('/api/user-subscriptions', userSubscription);
  return response.data;
};

export const updateUserSubscriptionById = async (id: string, userSubscription: UserSubscriptionInterface) => {
  const response = await axios.put(`/api/user-subscriptions/${id}`, userSubscription);
  return response.data;
};

export const getUserSubscriptionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-subscriptions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserSubscriptionById = async (id: string) => {
  const response = await axios.delete(`/api/user-subscriptions/${id}`);
  return response.data;
};
