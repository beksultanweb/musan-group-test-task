import { useSelector } from "react-redux"
import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { IRequest } from "../../types/types"
import { selectRequests } from "../../store/RequestStore/selectors"

const columns: ColumnsType<IRequest> = [
    {
        title: '№',
        dataIndex: 'id',
        key: 'id',
        render: (id, record, index) => {
            ++index;
            return index;
        },
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
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
        responsive: ['sm']
    },
    {
        title: 'Город',
        dataIndex: 'city',
        key: 'city',
        responsive: ['sm']
    },
    {
        title: 'Дата добавления',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    }
]

const List = () => {
    const requests = useSelector(selectRequests)

    return (
        <div className="sm:px-paddingx">
            <h1>Все заявки</h1>
            <Table dataSource={requests} columns={columns} rowKey={'id'} pagination={false}/>
        </div>
    )
}

export default List