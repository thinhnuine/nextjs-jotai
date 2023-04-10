import AppLayout from '@/pages/app-layout'
import TodoContainer from '@/container/todo-list'
import { NextPageWithLayout } from '../_app'

const TodoPage: NextPageWithLayout = () => {
  return <TodoContainer />
}

TodoPage.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}

export default TodoPage
