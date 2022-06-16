import React, { PropsWithChildren } from 'react'
import { AppsBar } from '../apps-bar'
import { BaseLayout } from '../base-layout'
import { Header } from '../header'
import { LeftNav } from '../left-nav'
import { AppLayoutProps } from './types'

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
}) => {
  const appsBar = <AppsBar />
  const header = <Header />
  const leftNav = <LeftNav />
  return (
    <BaseLayout leftSider={appsBar} header={header} leftNav={leftNav}>
      {children}
    </BaseLayout>
  )
}

export default AppLayout
