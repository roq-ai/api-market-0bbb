import { GetQueryInterface } from 'interfaces';

export interface ApiVersionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiVersionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
