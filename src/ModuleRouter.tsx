import React from 'react'
import { useParams } from 'react-router-dom'
import useModule from './components/hooks/useModule'
import Home from './pages/Home'

const ModuleRouter = (): JSX.Element => {
  const params = useParams<{ moduleId: string }>()
  const { getModule } = useModule()
  if (!params.moduleId) return <div>Unexpected route signature</div>
  const module = getModule(params.moduleId)
  if (module?.component) return module?.component
  else return <Home/>
}

export default ModuleRouter
