import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useModule from '../hooks/useModule'
import { Styled } from './Header.styled'
import { useParams } from 'react-router-dom'

const iconButtonSx = {
  color: 'white',
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
const Header = () => {
  const { getModule } = useModule()
  const params = useParams<{ moduleId: string }>()

  const rootModuleId = params.moduleId?.split('.')[0] || 'home'

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
              {getModule(rootModuleId).title}
            </Typography>
          </span>
        </div>
        <div className="right-controls">
          <IconButton sx={iconButtonSx} onClick={toggleFullScreen}>
            <Icon children="fullscreen" />
          </IconButton>
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
