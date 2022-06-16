import Button, { ButtonProps } from '@mui/material/Button'
import blueGrey from '@mui/material/colors/blueGrey'
import Icon from '@mui/material/Icon'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import { useLayoutSettings } from '../../contexts/layout-settings/context'
import { AppsBarButtonProps } from './types'

const buttonCommonSx = {
  height: '50px',
  paddingLeft: '26px',
  marginY: '2px',
  color: blueGrey[50],
}
const buttonCollapsedSx = { justifyContent: 'flex-start' }
const buttonNonCollapsedSx = {
  justifyContent: 'flex-start',
  paddingRight: '30px',
}

const AppsBarButton: React.FC<AppsBarButtonProps> = ({
  isCollapsed,
  icon,
  text,
  moduleId,
  onClick,
  ...buttonProps
}) => {
  const layoutSettings = useLayoutSettings()

  const buttonSx = {
    ...buttonCommonSx,
    ...(isCollapsed ? buttonCollapsedSx : buttonNonCollapsedSx),
  }
  return (
    <Tooltip title={text} placement="right" disableHoverListener={!isCollapsed}>
      <Button
        sx={buttonSx}
        variant={
          layoutSettings.currentModule === moduleId ? 'outlined' : 'text'
        }
        startIcon={
          <Icon sx={{ marginRight: isCollapsed ? '0px' : '20px' }}>{icon}</Icon>
        }
        onClick={(e) => {
          onClick?.(e)
          layoutSettings.setCurrentModule(moduleId)
        }}
        {...buttonProps}
      >
        {!isCollapsed && text}
      </Button>
    </Tooltip>
  )
}
export default AppsBarButton
