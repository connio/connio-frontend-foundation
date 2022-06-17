import Divider from '@mui/material/Divider'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import { Styled } from './AppsBar.styled'
import { blueGrey } from '@mui/material/colors'
import AppsBarButton from '../apps-bar-button/AppsBarButton'
import { AppsBarProps } from './types'

const AppsBar: React.FC<AppsBarProps> = ({
  topModules,
  bottomModules,
  logo,
  isCollapsed,
  toggleCollapse,
}) => {
  return (
    <Styled>
      <div className="logo-area">
        {!isCollapsed && (
          <div className="logo">
            <img src={logo} alt="Connio" />
          </div>
        )}
        <div className="collapse-icon">
          <IconButton sx={{ color: blueGrey[50] }} onClick={toggleCollapse}>
            <Icon children="widgets" />
          </IconButton>
        </div>
      </div>

      <Divider sx={{ marginY: '16px' }} />
      <div className="buttons main-buttons">
        {topModules.map((module) =>
          module.id === 'divider' ? (
            <Divider sx={{ marginY: '16px' }} />
          ) : (
            <AppsBarButton
              key={module.id}
              moduleId={module.id}
              text={module.title}
              icon={module.icon}
              isCollapsed={isCollapsed}
            />
          )
        )}
      </div>

      <div className="buttons last-buttons">
        <Divider sx={{ marginY: '16px' }} />
        {bottomModules.map((module) =>
          module.id === 'divider' ? (
            <Divider sx={{ marginY: '16px' }} />
          ) : (
            <AppsBarButton
              key={module.id}
              moduleId={module.id}
              text={module.title}
              icon={module.icon}
              isCollapsed={isCollapsed}
            />
          )
        )}
      </div>
    </Styled>
  )
}

export default AppsBar
