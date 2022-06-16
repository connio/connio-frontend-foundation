import React, { useContext, useState } from 'react'
import useBoolean, {
  UseBooleanReturnType,
} from '../../components/hooks/useBoolean'

interface LayoutSettingsValue {
  provided: boolean
  isCollapsed: UseBooleanReturnType
  currentModule: string
  setCurrentModule: (value: string) => void
  sidebarWidth: number
  setSidebarWidth: (value: number) => void
}
const initialValue: LayoutSettingsValue = {
  provided: false,
  isCollapsed: { value: false } as UseBooleanReturnType,
  currentModule: 'home',
  setCurrentModule: () => {},
  sidebarWidth: 250,
  setSidebarWidth: () => {},
}

export const LayoutSettings = React.createContext(initialValue)

export const LayoutSettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const isCollapsed = useBoolean(true)
  const [currentModule, setCurrentModule] = useState(initialValue.currentModule)
  const [sidebarWidth, setSidebarWidth] = useState(250)

  return (
    <LayoutSettings.Provider
      value={{
        provided: true,
        isCollapsed,
        currentModule,
        setCurrentModule,
        sidebarWidth,
        setSidebarWidth,
      }}
    >
      {children}
    </LayoutSettings.Provider>
  )
}

export const useLayoutSettings = (): LayoutSettingsValue => {
  return useContext(LayoutSettings)
}
