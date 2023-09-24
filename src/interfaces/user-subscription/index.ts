import { GetQueryInterface } from 'interfaces';

export interface UserSubscriptionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserSubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
