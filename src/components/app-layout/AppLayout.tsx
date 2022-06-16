import React, { PropsWithChildren } from 'react'
import { AppsBar } from '../apps-bar'
import { BaseLayout } from '../base-layout'
import { Header } from '../header'
import { LeftNav } from '../left-nav'
import { AppLayoutProps } from './types'
import { Breadcrumb, BreadcrumbItem, Page } from './AppLayout.styled'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import getModule from '../../helpers/getModule'
import Icon from '@mui/material/Icon'
const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
  moduleId,
}) => {
  const appsBar = <AppsBar />
  const header = <Header />
  const leftNav = <LeftNav />
  const module = getModule(moduleId)
  return (
    <BaseLayout leftSider={appsBar} header={header} leftNav={leftNav}>
      <Page>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              {module.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Breadcrumb>
              {module?.ancestors?.map((_module, index) => (
                <BreadcrumbItem key={_module.id}>
                  {_module.title}{' '}
                  {(module?.ancestors?.length || 0) - 1 > index ? ' /' : ''}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Page>
    </BaseLayout>
  )
}

export default AppLayout
