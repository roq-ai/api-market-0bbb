import axios from 'axios';
import queryString from 'query-string';
import { ApiDocumentationInterface, ApiDocumentationGetQueryInterface } from 'interfaces/api-documentation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApiDocumentations = async (
  query?: ApiDocumentationGetQueryInterface,
): Promise<PaginatedInterface<ApiDocumentationInterface>> => {
  const response = await axios.get('/api/api-documentations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createApiDocumentation = async (apiDocumentation: ApiDocumentationInterface) => {
  const response = await axios.post('/api/api-documentations', apiDocumentation);
  return response.data;
};

export const updateApiDocumentationById = async (id: string, apiDocumentation: ApiDocumentationInterface) => {
  const response = await axios.put(`/api/api-documentations/${id}`, apiDocumentation);
  return response.data;
};

export const getApiDocumentationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/api-documentations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApiDocumentationById = async (id: string) => {
  const response = await axios.delete(`/api/api-documentations/${id}`);
  return response.data;
};
