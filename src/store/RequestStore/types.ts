import { IRequest } from '../../types/types';

export interface IRequestsStoreAction {
  type: string;
  payload: IRequest;
}

export interface IRequestsReducer {
  requests: IRequest[];
}

export interface IStore {
  requestReducer: IRequestsReducer;
}
