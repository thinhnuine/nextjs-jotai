import { atom } from 'jotai'

export type Todo = {
  id: string
  title: string
  status: 'done' | 'not-done'
}

const inputAtom = atom<string>('')
const ListTodoAtom = atom<Todo[]>([])

export { inputAtom, ListTodoAtom }
