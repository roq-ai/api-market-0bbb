import axios from 'axios';
import queryString from 'query-string';
import { ApiCategoryInterface, ApiCategoryGetQueryInterface } from 'interfaces/api-category';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApiCategories = async (
  query?: ApiCategoryGetQueryInterface,
): Promise<PaginatedInterface<ApiCategoryInterface>> => {
  const response = await axios.get('/api/api-categories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createApiCategory = async (apiCategory: ApiCategoryInterface) => {
  const response = await axios.post('/api/api-categories', apiCategory);
  return response.data;
};

export const updateApiCategoryById = async (id: string, apiCategory: ApiCategoryInterface) => {
  const response = await axios.put(`/api/api-categories/${id}`, apiCategory);
  return response.data;
};

export const getApiCategoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/api-categories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApiCategoryById = async (id: string) => {
  const response = await axios.delete(`/api/api-categories/${id}`);
  return response.data;
};
