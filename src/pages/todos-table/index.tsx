import AppLayout from '../app-layout'
import { TodoTableContainer } from '../../container/todo-list/table'
import { NextPageWithLayout } from '../_app'

const TodoTablePage: NextPageWithLayout = () => {
  return <TodoTableContainer />
}

TodoTablePage.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}

export default TodoTablePage
