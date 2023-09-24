import axios from 'axios';
import queryString from 'query-string';
import { ApiRatingInterface, ApiRatingGetQueryInterface } from 'interfaces/api-rating';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApiRatings = async (
  query?: ApiRatingGetQueryInterface,
): Promise<PaginatedInterface<ApiRatingInterface>> => {
  const response = await axios.get('/api/api-ratings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createApiRating = async (apiRating: ApiRatingInterface) => {
  const response = await axios.post('/api/api-ratings', apiRating);
  return response.data;
};

export const updateApiRatingById = async (id: string, apiRating: ApiRatingInterface) => {
  const response = await axios.put(`/api/api-ratings/${id}`, apiRating);
  return response.data;
};

export const getApiRatingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/api-ratings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApiRatingById = async (id: string) => {
  const response = await axios.delete(`/api/api-ratings/${id}`);
  return response.data;
};
