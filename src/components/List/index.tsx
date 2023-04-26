import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { IRequest, RequestsColumn } from '../../types/types';
import { selectRequests } from '../../store/RequestStore/selectors';

const columns: RequestsColumn[] = [
  {
    title: '№',
    dataIndex: 'id',
    key: 'id',
    render: (id, record, index) => ++index,
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Номер телефона',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    responsive: ['lg'],
  },
  {
    title: 'Город',
    dataIndex: 'city',
    key: 'city',
    responsive: ['lg'],
  },
  {
    title: 'Дата добавления',
    dataIndex: 'date',
    key: 'date',
    sorter: (a: IRequest, b: IRequest) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
];

const List = () => {
  const requests = useSelector(selectRequests);

  return (
    <div className='sm:px-paddingx'>
      <h1>Все заявки</h1>
      <Table dataSource={requests} columns={columns} rowKey={'id'} pagination={false} />
    </div>
  );
};

export default List;
