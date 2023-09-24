import axios from 'axios';
import queryString from 'query-string';
import { ApiVersionInterface, ApiVersionGetQueryInterface } from 'interfaces/api-version';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApiVersions = async (
  query?: ApiVersionGetQueryInterface,
): Promise<PaginatedInterface<ApiVersionInterface>> => {
  const response = await axios.get('/api/api-versions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createApiVersion = async (apiVersion: ApiVersionInterface) => {
  const response = await axios.post('/api/api-versions', apiVersion);
  return response.data;
};

export const updateApiVersionById = async (id: string, apiVersion: ApiVersionInterface) => {
  const response = await axios.put(`/api/api-versions/${id}`, apiVersion);
  return response.data;
};

export const getApiVersionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/api-versions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApiVersionById = async (id: string) => {
  const response = await axios.delete(`/api/api-versions/${id}`);
  return response.data;
};
