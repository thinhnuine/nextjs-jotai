import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ListTodoAtom } from './store'

export default function TodoContainer() {
  const router = useRouter()
  const [listTodo, setListTodo] = useAtom(ListTodoAtom)
  useEffect(() => {
    if (!router.isReady) return
    getData()
  }, [router.isReady])

  const getData = async () => {
    try {
    } catch (error) {}
  }
  return (
    <>
      <h1 className='text-xl'>Todo list</h1>
      {!!listTodo?.length &&
        listTodo.map((todo, index) => (
          <div key={index} className='mt-5'>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>{todo.status}</p>
          </div>
        ))}
    </>
  )
}
