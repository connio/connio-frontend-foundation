import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useLayoutSettings } from '../../contexts/layout-settings/context'
import getModule from '../../helpers/getModule'
import { Styled } from './Header.styled'

const iconButtonSx = {
  color: 'white',
}
const Header = () => {
  const layoutSettings = useLayoutSettings()

  return (
    <Styled>
      <div className="header-colorbar">
        <div className="left-controls">
          <span className="module-name">
            <Typography
              variant="h4"
              component="h4"
              sx={{ paddingLeft: '14px' }}
            >
              {getModule(layoutSettings.currentModule).title}
            </Typography>
          </span>
        </div>
        <div className="right-controls">
          <IconButton sx={iconButtonSx}>
            <Icon children="notifications" />
          </IconButton>
          <IconButton sx={iconButtonSx}>
            <Icon children="help" />
          </IconButton>
          <IconButton sx={iconButtonSx}>
            <Icon children="settings" />
          </IconButton>
          <IconButton sx={iconButtonSx}>
            <Icon children="person" />
          </IconButton>
        </div>
      </div>
    </Styled>
  )
}

export default Header
