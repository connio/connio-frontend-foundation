import { useCallback } from 'react'
import { ModuleProps, modules } from '../../constants/modules'

export interface UseModuleReturnType {
  getModule: (moduleId: string) => ModuleProps
  modules: ModuleProps[]
}

function useModule(): UseModuleReturnType {
  const _modules = modules()
  const getModule = useCallback(
    (moduleId: string): ModuleProps => {
      if (moduleId === '-')
        return { id: 'divider', title: 'divider', icon: 'divider' }
      const path = moduleId.split('.')
      let result: ModuleProps
      const ancestors: ModuleProps[] = []
      let lookIn: Array<ModuleProps> = _modules
      path.every((_moduleId, index) => {
        const found = lookIn.find((module) => module.id === _moduleId)
        if (!found) return false
        if (index !== path.length - 1 && !found.subModules?.length) return false
        if (found.subModules) lookIn = found.subModules
        result = found
        ancestors.push(found)
        return true
      })
      return { ...result, ancestors } || { id: '', title: '', icon: '' }
    },
    [_modules]
  )

  return { getModule, modules: _modules }
}

export default useModule
