import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Icon from '@mui/material/Icon'
import { useCallback, useEffect, useRef, useState } from 'react'
import { modules } from '../../constants/dummy'
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

  const sidebarRef = useRef<any>(null)
  const [isResizing, setIsResizing] = useState(false)

  const startResizing = useCallback((mouseDownEvent: any) => {
    setIsResizing(true)
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  const restoreResizing = useCallback(() => {
    if (layoutSettings.sidebarWidth === 20) layoutSettings.setSidebarWidth(250)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutSettings.sidebarWidth])

  const toggleResizing = useCallback(() => {
    if (layoutSettings.sidebarWidth === 20) layoutSettings.setSidebarWidth(250)
    else layoutSettings.setSidebarWidth(20)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutSettings.sidebarWidth])

  const resize = useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        const newWidth =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left
        if (newWidth < 70) {
          layoutSettings.setSidebarWidth(20)
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

  const module = modules[layoutSettings.currentModule]
  return module.subitems?.length ? (
    <Styled
      ref={sidebarRef}
      style={{ width: layoutSettings.sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
      className={
        layoutSettings.sidebarWidth === 20
          ? 'collapsed-left-nav'
          : 'regular-left-nav'
      }
    >
      <div className="app-sidebar-content">
        <div className="overflow-wrapper">
          {module.subitems.map((menu) => (
            <Button
              sx={buttonSx}
              startIcon={<Icon sx={{ marginRight: '12px' }}>{menu.icon}</Icon>}
            >
              {menu.title}
            </Button>
          ))}
        </div>
      </div>

      <div
        className="app-sidebar-resizer"
        onMouseDown={startResizing}
        onClick={restoreResizing}
      />
      <div className="app-sidebar-toggle" onClick={toggleResizing}>
      <Fab size="small" color="primary" aria-label="add"><Icon>{layoutSettings.sidebarWidth===20 ? 'chevron_right' : 'chevron_left'}</Icon></Fab>
      </div>
    </Styled>
  ) : (
    <div></div>
  )
}

export default LeftNav
