import { Button } from 'antd'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { InputTodo } from './input'
import { ListTodoAtom } from './store'

export default function TodoContainer() {
  const [listTodo, setListTodo] = useAtom(ListTodoAtom)

  const handleUpdateStatusTodo = (todoId: string) => {
    setListTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === todoId) {
          if (todo.status === 'not-done') {
            return { ...todo, status: 'done' }
          } else if (todo.status === 'done') {
            return { ...todo, status: 'not-done' }
          }
        }

        return todo
      })
    )
  }

  const handleRemoveTodo = (todoId: string) => {
    setListTodo(listTodo?.filter((todo) => todo.id !== todoId))
  }

  return (
    <>
      <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-2/4'>
        <div className='mb-4'>
          <Link href={'/todos-table'}>
            <Button>
              <span>Todo Table</span>
            </Button>
          </Link>
          <InputTodo />
        </div>
        {listTodo?.map((todo) => (
          <div key={todo.id}>
            <div className='flex mb-4 items-center'>
              <p className={`flex-1 text-gray-700 ${todo.status === 'done' ? 'line-through' : 'unset'}`}>
                {todo.title}
              </p>
              <div className=' flex'>
                <button
                  className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
                    todo.status === 'not-done'
                      ? 'text-green-500 border-green-500 hover:bg-green-500'
                      : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500'
                  }`}
                  onClick={() => handleUpdateStatusTodo(todo.id)}
                >
                  {todo.status === 'done' ? 'Not done' : 'Done'}
                </button>
                <button
                  className='flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500'
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
