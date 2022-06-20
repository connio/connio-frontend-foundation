import React, { PropsWithChildren } from 'react'
import { BaseLayout } from '../base-layout'
import { AppLayoutProps } from './types'
import { Page } from './AppLayout.styled'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Box from '@mui/material/Box'
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
              <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                {breadcrumb?.slice(0, breadcrumb.length - 1).map((_module) => (
                  <Link
                    key={_module.id}
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    {_module.icon} {_module.title}
                  </Link>
                ))}

                <Typography
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="text.primary"
                >
                  {breadcrumb.at(-1).icon} {breadcrumb.at(-1).title}
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
