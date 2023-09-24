import { GetQueryInterface } from 'interfaces';

export interface ApiReviewInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
}
