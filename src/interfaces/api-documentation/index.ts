import { GetQueryInterface } from 'interfaces';

export interface ApiDocumentationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApiDocumentationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
