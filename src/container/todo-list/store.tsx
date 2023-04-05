import { atom } from 'jotai'

export type Todo = {
  title: string
  description: string
  status: 'pending' | 'done' | 'doing'
}

export const ListTodoAtom = atom<Todo[] | null>(null)
