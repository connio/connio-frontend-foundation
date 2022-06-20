import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import useModule from './components/hooks/useModule'
import Home from './pages/Home'

const ModuleRouter = (): JSX.Element => {
  const params = useParams<{ moduleId: string }>()
  const { getModule } = useModule()
  if (!params.moduleId) return <div>Unexpected route signature</div>
  let module
  if (params.moduleId.split('.').length === 1) {
    const subModules = getModule(params.moduleId)?.subModules
    if (subModules?.length)
      return <Navigate to={`/module/${params.moduleId}.${subModules[0].id}`} />
    else module = getModule(params.moduleId)
  } else module = getModule(params.moduleId)
  if (module?.component) return module?.component
  else return <Home />
}

export default ModuleRouter
