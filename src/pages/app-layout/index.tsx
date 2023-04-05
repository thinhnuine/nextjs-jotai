import { ReactElement } from 'react'

export const AppLayout = ({ children }: { children: ReactElement }) => {
  return <div className='min-h-[100vh] p-10'>{children}</div>
}
