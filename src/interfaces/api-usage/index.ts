import { GetQueryInterface } from 'interfaces';

export interface ApiUsageInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiUsageGetQueryInterface extends GetQueryInterface {
  id?: string;
}
