import { GetQueryInterface } from 'interfaces';

export interface ApiRatingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiRatingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
