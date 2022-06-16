import Typography from '@mui/material/Typography'
import React from 'react'
import { modules } from '../../constants/dummy'
import { useLayoutSettings } from '../../contexts/layout-settings/context'
import { Styled } from './Header.styled'

const Header = () => {
  const layoutSettings = useLayoutSettings()
  return (
    <Styled>
      <div className="header-colorbar">
        <span className="module-name">
          <Typography variant="h4" component="h4" sx={{ paddingLeft: '14px' }}>
            {modules[layoutSettings.currentModule].title}
          </Typography>
        </span>
      </div>
    </Styled>
  )
}

export default Header
