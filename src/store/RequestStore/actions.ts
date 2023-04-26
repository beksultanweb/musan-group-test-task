import { IRequest } from '../../types/types';

export const addRequestAction = (request: IRequest) => {
  return {
    type: 'request/add',
    payload: request,
  };
};
