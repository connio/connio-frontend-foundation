import React, { useContext, useState } from 'react'
import useBoolean, {
  UseBooleanReturnType,
} from '../../components/hooks/useBoolean'

interface LayoutSettingsValue {
  provided: boolean
  isCollapsed: UseBooleanReturnType
  sidebarWidth: number
  setSidebarWidth: (value: number) => void
}
const initialValue: LayoutSettingsValue = {
  provided: false,
  isCollapsed: { value: false } as UseBooleanReturnType,
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
  const [sidebarWidth, setSidebarWidth] = useState(250)

  return (
    <LayoutSettings.Provider
      value={{
        provided: true,
        isCollapsed,
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
