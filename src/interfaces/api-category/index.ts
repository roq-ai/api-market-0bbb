import { GetQueryInterface } from 'interfaces';

export interface ApiCategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
