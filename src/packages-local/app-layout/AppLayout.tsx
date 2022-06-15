import React, { PropsWithChildren } from 'react'
import { AppsBar } from '../apps-bar'
import { BaseLayout } from '../base-layout'
import { AppLayoutProps } from './types'

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
}) => {
  const appsBar = <AppsBar />
  return <BaseLayout leftSider={appsBar}>{children}</BaseLayout>
}

export default AppLayout
