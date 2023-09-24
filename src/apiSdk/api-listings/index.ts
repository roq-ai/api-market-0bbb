import axios from 'axios';
import queryString from 'query-string';
import { ApiListingInterface, ApiListingGetQueryInterface } from 'interfaces/api-listing';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApiListings = async (
  query?: ApiListingGetQueryInterface,
): Promise<PaginatedInterface<ApiListingInterface>> => {
  const response = await axios.get('/api/api-listings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createApiListing = async (apiListing: ApiListingInterface) => {
  const response = await axios.post('/api/api-listings', apiListing);
  return response.data;
};

export const updateApiListingById = async (id: string, apiListing: ApiListingInterface) => {
  const response = await axios.put(`/api/api-listings/${id}`, apiListing);
  return response.data;
};

export const getApiListingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/api-listings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApiListingById = async (id: string) => {
  const response = await axios.delete(`/api/api-listings/${id}`);
  return response.data;
};
