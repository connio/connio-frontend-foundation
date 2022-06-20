import React, { PropsWithChildren } from 'react'
import { AppLayout } from '../components/app-layout'
import { AppsBar } from '../components/apps-bar'
import { Header } from '../components/header'
import { LeftNav } from '../components/left-nav'

import logo from '../logo-connio-inverse.svg'
import { useLayoutSettings } from '../contexts/layout-settings/context'
import useModule from '../components/hooks/useModule'
import { useParams } from 'react-router-dom'

export const Main: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const layoutSettings = useLayoutSettings()
  const params = useParams<{ moduleId: string }>()

  const { getModule } = useModule()
  const module = params.moduleId
    ? getModule(params.moduleId)
    : getModule('home')

  return (
    <AppLayout
      title={module.title}
      breadcrumb={module.ancestors}
      leftSider={
        <AppsBar
          logo={logo}
          isCollapsed={layoutSettings.isCollapsed.value}
          toggleCollapse={layoutSettings.isCollapsed.toggle}
          topModules={[
            'home',
            '-',
            'connectionHubs',
            'apps',
            'assets',
            'systemInsight',
            'dataOps',
            'assetDesigner',
          ].map(getModule)}
          bottomModules={[
            'marketPlace',
            'documentation',
            'settings',
            'support',
            '-',
            'logout',
          ].map(getModule)}
        />
      }
      leftNav={<LeftNav />}
      header={<Header />}
    >
      {children}
    </AppLayout>
  )
}
