import { ListTodoAtom, Todo } from '@/container/todo-list/store'
import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useAtomValue } from 'jotai'
import Link from 'next/link'

const columns: ColumnsType<Todo> = [
  {
    key: 'title',
    title: 'Title',
    dataIndex: 'title',
    width: 500,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: 300,
  },
]
export const TodoTableContainer = () => {
  const listTodo = useAtomValue(ListTodoAtom)

  return (
    <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-2/4'>
      <Link href={'/todos'}>
        <Button className='mb-5'>
          <span>Todo List</span>
        </Button>
      </Link>
      <Table columns={columns} dataSource={listTodo} />
    </div>
  )
}
