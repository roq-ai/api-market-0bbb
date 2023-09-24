import axios from 'axios';
import queryString from 'query-string';
import { ApiReviewInterface, ApiReviewGetQueryInterface } from 'interfaces/api-review';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApiReviews = async (
  query?: ApiReviewGetQueryInterface,
): Promise<PaginatedInterface<ApiReviewInterface>> => {
  const response = await axios.get('/api/api-reviews', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createApiReview = async (apiReview: ApiReviewInterface) => {
  const response = await axios.post('/api/api-reviews', apiReview);
  return response.data;
};

export const updateApiReviewById = async (id: string, apiReview: ApiReviewInterface) => {
  const response = await axios.put(`/api/api-reviews/${id}`, apiReview);
  return response.data;
};

export const getApiReviewById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/api-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApiReviewById = async (id: string) => {
  const response = await axios.delete(`/api/api-reviews/${id}`);
  return response.data;
};
