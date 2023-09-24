import { GetQueryInterface } from 'interfaces';

export interface ApiListingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiListingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
