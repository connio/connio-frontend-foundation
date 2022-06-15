import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import useBoolean from '../hooks/useBoolean'
import { Styled } from './AppsBar.styled'

//dummy
const apps = [
  {
    title: 'Connection Hubs',
    icon: 'hub',
  },
  {
    title: 'Apps',
    icon: 'apps',
  },
  {
    title: 'Assets',
    icon: 'desktop_windows',
  },
  {
    title: 'System Insight',
    icon: 'insights',
  },
  {
    title: 'DataOps',
    icon: 'layers',
  },
  {
    title: 'Asset Designer',
    icon: 'design_services',
  },
]
const buttonCommonSx = { height: '50px', paddingLeft: '26px', marginY: '2px' }
const buttonCollapsedSx = { justifyContent: 'flex-start' }
const buttonNonCollapsedSx = {
  justifyContent: 'flex-start',
  paddingRight: '30px',
}

const AppsBar = () => {
  const isCollapsed = useBoolean(false)
  const buttonSx = {
    ...buttonCommonSx,
    ...(isCollapsed.value ? buttonCollapsedSx : buttonNonCollapsedSx),
  }
  return (
    <Styled>
      <div className="collapse-icon">
        <IconButton onClick={isCollapsed.toggle}>
          <Icon children="widgets" />
        </IconButton>
      </div>
      <Divider sx={{ marginY: '16px' }} />
      <Button sx={buttonSx} variant="text" startIcon={<Icon children="home" />}>
        {!isCollapsed.value && 'HOME'}
      </Button>
      {apps.map((app) => (
        <Button
          sx={buttonSx}
          variant="text"
          startIcon={<Icon children={app.icon} />}
        >
          {!isCollapsed.value && app.title}
        </Button>
      ))}
      <Divider sx={{ marginY: '16px' }} />

      <Button sx={buttonSx} variant="text" startIcon={<Icon children="store" />}>
        {!isCollapsed.value && 'Market Place'}
      </Button>
      <Button sx={buttonSx} variant="text" startIcon={<Icon children="help" />}>
        {!isCollapsed.value && 'Documentation'}
      </Button>
      <Button sx={buttonSx} variant="text" startIcon={<Icon children="settings" />}>
        {!isCollapsed.value && 'Settings'}
      </Button>
      <Button sx={buttonSx} variant="text" startIcon={<Icon children="headset_mic" />}>
        {!isCollapsed.value && 'Support'}
      </Button>
    </Styled>
  )
}

export default AppsBar
