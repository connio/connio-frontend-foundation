import Divider from '@mui/material/Divider'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import { Styled } from './AppsBar.styled'
import { blueGrey } from '@mui/material/colors'
import AppsBarButton from '../apps-bar-button/AppsBarButton'
import { commonModules, modules, visibleModules } from '../../constants/dummy'
import logo from '../../logo-connio-inverse.svg'
import { useLayoutSettings } from '../../contexts/layout-settings/context'

const AppsBar = () => {
  const layoutSettings = useLayoutSettings()
  return (
    <Styled>
      <div className="logo-area">
        {!layoutSettings.isCollapsed.value && (
          <div className="logo">
            <img src={logo} alt="Connio" />
          </div>
        )}
        <div className="collapse-icon">
          <IconButton
            sx={{ color: blueGrey[50] }}
            onClick={layoutSettings.isCollapsed.toggle}
          >
            <Icon children="widgets" />
          </IconButton>
        </div>
      </div>

      <Divider sx={{ marginY: '16px' }} />
      <AppsBarButton
        moduleId={modules.home.id}
        text={modules.home.title}
        icon={modules.home.icon}
        isCollapsed={layoutSettings.isCollapsed.value}
      />
      <Divider sx={{ marginY: '16px' }} />
      <div className="buttons main-buttons">
        {visibleModules.map((module) => (
          <AppsBarButton
            key={module.id}
            moduleId={module.id}

            text={module.title}
            icon={module.icon}
            isCollapsed={layoutSettings.isCollapsed.value}
          />
        ))}
      </div>
      <Divider sx={{ marginY: '16px' }} />
      <div className="buttons last-buttons">
        {commonModules.map((module) => (
          <AppsBarButton
            key={module.id}
            moduleId={module.id}
            text={module.title}
            icon={module.icon}
            isCollapsed={layoutSettings.isCollapsed.value}
          />
        ))}

        <Divider sx={{ marginY: '16px' }} />
        <AppsBarButton
            moduleId={module.id}
          text="Logout"
          icon="logout"
          isCollapsed={layoutSettings.isCollapsed.value}
        />
      </div>
    </Styled>
  )
}

export default AppsBar
