import { ModuleProps, modules } from '../constants/modules'

const getModule = (moduleId: string): ModuleProps => {
  const path = moduleId.split('.')
  let result: ModuleProps
  const ancestors: ModuleProps[] = []
  let lookIn: Array<ModuleProps> = modules
  path.every((_moduleId, index) => {
    const found = lookIn.find((module) => module.id === _moduleId)
    if (!found) return false
    if (index !== path.length - 1 && !found.subitems?.length) return false
    if (found.subitems) lookIn = found.subitems
    result = found
    ancestors.push(found)
    return true
  })
  return { ...result, ancestors } || { id: '', title: '', icon: '' }
}
export default getModule
