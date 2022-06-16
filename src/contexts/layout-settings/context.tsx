import React, { useContext, useState } from 'react'
import useBoolean, {
  UseBooleanReturnType,
} from '../../components/hooks/useBoolean'

interface LayoutSettingsValue {
  provided: boolean
  isCollapsed: UseBooleanReturnType
  currentModule: string //TODO:router bağlandıktan sonra gerek kalmıyor
  setCurrentModule: (value: string) => void //TODO:router bağlandıktan sonra gerek kalmıyor
  sidebarWidth: number
  setSidebarWidth: (value: number) => void
}
const initialValue: LayoutSettingsValue = {
  provided: false,
  isCollapsed: { value: false } as UseBooleanReturnType,
  currentModule: 'home', //TODO:router bağlandıktan sonra gerek kalmıyor
  setCurrentModule: () => {}, //TODO:router bağlandıktan sonra gerek kalmıyor
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
  const [currentModule, setCurrentModule] = useState(initialValue.currentModule) //TODO:router bağlandıktan sonra gerek kalmıyor
  const [sidebarWidth, setSidebarWidth] = useState(250)

  return (
    <LayoutSettings.Provider
      value={{
        provided: true,
        isCollapsed,
        currentModule, //TODO:router bağlandıktan sonra gerek kalmıyor
        setCurrentModule, //TODO:router bağlandıktan sonra gerek kalmıyor
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
