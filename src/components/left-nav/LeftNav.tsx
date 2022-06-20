import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Icon from '@mui/material/Icon'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLayoutSettings } from '../../contexts/layout-settings/context'
import useModule from '../hooks/useModule'
import { Styled } from './LeftNav.styled'
import { useParams, useNavigate } from 'react-router-dom'

const buttonSx = {
  justifyContent: 'flex-start',
  color: 'silver',
  paddingLeft: '20px',
  marginY: '2px',
}
const collapsedSize = 15
const LeftNav = () => {
  const layoutSettings = useLayoutSettings()
  const params = useParams<{ moduleId: string }>()
  const navigate = useNavigate()
  const { getModule } = useModule()
  const isCollapsed = layoutSettings.sidebarWidth === collapsedSize
  const sidebarRef = useRef<any>(null)
  const [isResizing, setIsResizing] = useState(false)

  const rootModuleId = params.moduleId?.split('.')[0] || 'home'

  const startResizing = useCallback((mouseDownEvent: any) => {
    setIsResizing(true)
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  const restoreResizing = useCallback(() => {
    if (layoutSettings.sidebarWidth === collapsedSize)
      layoutSettings.setSidebarWidth(250)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutSettings.sidebarWidth])

  const toggleResizing = useCallback(() => {
    if (layoutSettings.sidebarWidth === collapsedSize)
      layoutSettings.setSidebarWidth(250)
    else layoutSettings.setSidebarWidth(collapsedSize + 1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutSettings.sidebarWidth])

  const resize = useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        const newWidth =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left
        if (newWidth < 70) {
          layoutSettings.setSidebarWidth(collapsedSize)
        } else {
          layoutSettings.setSidebarWidth(newWidth)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isResizing]
  )

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  useEffect(() => {
    if (layoutSettings.sidebarWidth === 16) {
      setTimeout(() => layoutSettings.setSidebarWidth(collapsedSize), 200)
    }
  }, [layoutSettings])
  const module = getModule(rootModuleId)
  return module.subModules?.length ? (
    <Styled
      ref={sidebarRef}
      style={{ width: layoutSettings.sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
      className={
        layoutSettings.sidebarWidth === 15
          ? 'collapsed-left-nav'
          : 'regular-left-nav'
      }
    >
      <div className="app-sidebar-content">
        <div className="overflow-wrapper">
          {module.subModules.map((menu) => {
            //const menuModule = getModule([module.id, menu.id].join('.'))
            const modulePath = [module.id, menu.id].join('.')
            return (
              <Button
                variant={params.moduleId === modulePath ? 'outlined' : 'text'}
                onClick={() => navigate('/module/' + modulePath)}
                sx={buttonSx}
                startIcon={<Box sx={{ marginRight: '12px' }}>{menu.icon}</Box>}
              >
                {menu.title}
              </Button>
            )
          })}
        </div>
      </div>

      {!isCollapsed && (
        <div
          className="app-sidebar-resizer"
          onMouseDown={startResizing}
          onClick={restoreResizing}
        />
      )}
      <div className="app-sidebar-toggle" onClick={toggleResizing}>
        <Fab size="small" color="primary" aria-label="add">
          <Icon children={isCollapsed ? 'chevron_right' : 'chevron_left'} />
        </Fab>
      </div>
    </Styled>
  ) : (
    <div></div>
  )
}

export default LeftNav
