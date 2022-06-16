import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Icon from '@mui/material/Icon'
import { modules, visibleModules } from '../../constants/dummy'
import { useLayoutSettings } from '../../contexts/layout-settings/context'
import { Styled } from './LeftNav.styled'

const buttonSx = {
  justifyContent: 'flex-start',
  color: 'silver',
  paddingLeft: '20px',
  marginY: '2px',
}
const LeftNav = () => {
  const layoutSettings = useLayoutSettings()
  const module = modules[layoutSettings.currentModule]
  return module.subitems?.length ? (
    <Styled>
      {module.subitems.map((menu) => (
        <Button
          sx={buttonSx}
          startIcon={<Icon sx={{ marginRight: '12px' }}>{menu.icon}</Icon>}
        >
          {menu.title}
        </Button>
      ))}
      <Button></Button>
    </Styled>
  ) : (
    <div></div>
  )
}

export default LeftNav
