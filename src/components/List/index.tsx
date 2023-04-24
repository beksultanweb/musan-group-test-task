import { useSelector } from "react-redux"
import { Table } from "antd"
import { IRequestsReducer } from "../../store/types"
import { ColumnsType } from "antd/es/table"
import { IRequest } from "../../types/types"

const columns: ColumnsType<IRequest> = [
    {
        title: '№',
        dataIndex: 'key',
        rowScope: 'row'
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Номер телефона',
        dataIndex: 'tel',
        key: 'tel'
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Город',
        dataIndex: 'city',
        key: 'city'
    },
    {
        title: 'Дата добавления',
        dataIndex: 'date',
        key: 'date'
    }
]

const List = () => {
    const requests = useSelector((state: IRequestsReducer) => state.requests)
    console.log(requests)


    return (
        <main className="px-[56px]">
            <h1>Все заявки</h1>
            <Table dataSource={requests} columns={columns}/>
        </main>
    )
}

export default List