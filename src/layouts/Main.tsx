import React, { PropsWithChildren } from 'react'
import { AppLayout } from '../components/app-layout'
import { AppsBar } from '../components/apps-bar'
import { Header } from '../components/header'
import { LeftNav } from '../components/left-nav'
import getModule from '../helpers/getModule'

import logo from '../logo-connio-inverse.svg'
import { useLayoutSettings } from '../contexts/layout-settings/context'

const Main: React.FC<
  PropsWithChildren<{
    moduleId: string
  }>
> = ({ children, moduleId }) => {
  const layoutSettings = useLayoutSettings()
  const module = getModule(moduleId)

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

export default Main
