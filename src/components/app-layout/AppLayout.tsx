import React, { PropsWithChildren } from 'react'
import { AppsBar } from '../apps-bar'
import { BaseLayout } from '../base-layout'
import { Header } from '../header'
import { LeftNav } from '../left-nav'
import { AppLayoutProps } from './types'
import { Page } from './AppLayout.styled'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
  title,
  breadcrumb,
  ...baseLayoutProps
}) => {
  return (
    <BaseLayout {...baseLayoutProps}>
      <Page>
        <Grid container spacing={2}>
          {breadcrumb && (
            <Grid item xs={12}>
              <Breadcrumbs aria-label="breadcrumb">
                {breadcrumb?.slice(0, breadcrumb.length - 1).map((_module) => (
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Icon
                      sx={{ mr: 0.5 }}
                      children={_module.icon}
                      fontSize="inherit"
                    />
                    {_module.title}
                  </Link>
                ))}

                <Typography
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="text.primary"
                >
                  <Icon
                    sx={{ mr: 0.5 }}
                    children={breadcrumb.at(-1).icon}
                    fontSize="inherit"
                  />
                  {breadcrumb.at(-1).title}
                </Typography>
              </Breadcrumbs>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>
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
