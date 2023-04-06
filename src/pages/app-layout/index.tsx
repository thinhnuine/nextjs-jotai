import { FloatButton } from 'antd'
import { useAtom } from 'jotai'
import { ReactElement } from 'react'
import { lightModeAtom } from './store'

export const AppLayout = ({ children }: { children: ReactElement }) => {
  const [lightMode, setLightMode] = useAtom(lightModeAtom)
  const toggleLightMode = () => setLightMode((prev) => (prev === 'white' ? 'blue' : 'white'))

  return (
    <div
      className={`min-h-full h-full w-full flex items-center justify-center font-sans ${
        lightMode === 'blue' && 'bg-teal-300'
      }`}
    >
      {children}
      <FloatButton onClick={toggleLightMode} />
    </div>
  )
}
