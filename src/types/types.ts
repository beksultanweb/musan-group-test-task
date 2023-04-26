import { FC } from 'react';
import { Breakpoint } from 'antd';

export interface IRequest {
  id: number;
  name: string;
  tel: string;
  email: string;
  city: string;
  date: string;
}

export interface RouteElements {
  path: string;
  element: FC;
}

export interface Column {
  title: string;
  dataIndex: keyof IRequest;
  key: keyof IRequest;
  sorter?: (a: IRequest, b: IRequest) => number;
  render?: (id: string, record: any, index: number) => number;
  responsive?: Breakpoint[];
}
