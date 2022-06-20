import Button from '@mui/material/Button'
import blueGrey from '@mui/material/colors/blueGrey'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import { AppsBarButtonProps } from './types'
import { useParams, useNavigate } from 'react-router-dom'

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
  const params = useParams<{ moduleId: string }>()
  const navigate = useNavigate()
  const rootModuleId = params.moduleId?.split('.')[0] || 'home'
  const buttonSx = {
    ...buttonCommonSx,
    ...(isCollapsed ? buttonCollapsedSx : buttonNonCollapsedSx),
  }
  return (
    <Tooltip title={text} placement="right" disableHoverListener={!isCollapsed}>
      <Button
        sx={buttonSx}
        variant={rootModuleId === moduleId ? 'outlined' : 'text'}
        startIcon={icon}
        onClick={(e) => {
          onClick?.(e)
          navigate('/module/' + moduleId)
        }}
        {...buttonProps}
      >
        {!isCollapsed && text}
      </Button>
    </Tooltip>
  )
}
export default AppsBarButton
