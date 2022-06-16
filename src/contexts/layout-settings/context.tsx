import React, { useContext, useState } from 'react'
import useBoolean, {
  UseBooleanReturnType,
} from '../../packages-local/hooks/useBoolean'

interface LayoutSettingsValue {
  provided: boolean
  isCollapsed: UseBooleanReturnType
  currentModule: string
  setCurrentModule: (value: string) => void
}
const initialValue: LayoutSettingsValue = {
  provided: false,
  isCollapsed: { value: false } as UseBooleanReturnType,
  currentModule: 'home',
  setCurrentModule: () => {},
}

export const LayoutSettings = React.createContext(initialValue)

export const LayoutSettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const isCollapsed = useBoolean(true)
  const [currentModule, setCurrentModule] = useState(initialValue.currentModule)

  return (
    <LayoutSettings.Provider
      value={{ provided: true, isCollapsed, currentModule, setCurrentModule }}
    >
      {children}
    </LayoutSettings.Provider>
  )
}

export const useLayoutSettings = (): LayoutSettingsValue => {
  return useContext(LayoutSettings)
}
