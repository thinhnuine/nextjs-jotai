import { Input } from 'antd'
import { useAtom, useSetAtom } from 'jotai'
import { inputAtom, ListTodoAtom } from './store'

export const InputTodo = () => {
  const [input, setInput] = useAtom(inputAtom)

  const setListTodo = useSetAtom(ListTodoAtom)

  const handleAddTodo = () => {
    if (input !== '') {
      setListTodo((prev) => [...(prev || []), { id: new Date().toISOString(), title: input, status: 'not-done' }])
      setInput('')
    }
  }

  return (
    <form className='flex mt-4'>
      <Input
        className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
        placeholder='Add Todo'
        required
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className='flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500'
        onClick={handleAddTodo}
      >
        Add
      </button>
    </form>
  )
}
