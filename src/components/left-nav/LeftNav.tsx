import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Icon from '@mui/material/Icon'
import { useCallback, useEffect, useRef, useState } from 'react'
import { modules } from '../../constants/modules'
import { useLayoutSettings } from '../../contexts/layout-settings/context'
import getModule from '../../helpers/getModule'
import { Styled } from './LeftNav.styled'

const buttonSx = {
  justifyContent: 'flex-start',
  color: 'silver',
  paddingLeft: '20px',
  marginY: '2px',
}
const collapsedSize = 15
const LeftNav = () => {
  const layoutSettings = useLayoutSettings()
  const isCollapsed = layoutSettings.sidebarWidth === collapsedSize
  const sidebarRef = useRef<any>(null)
  const [isResizing, setIsResizing] = useState(false)

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
  const module = getModule(layoutSettings.currentModule)
  return module.subitems?.length ? (
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
          {module.subitems.map((menu) => {
            //const menuModule = getModule([module.id, menu.id].join('.'))
            const modulePath = [module.id, menu.id].join('.')
            return (
              <Button
                variant={
                  window.location.hash.includes(modulePath) //TODO: router bağlandıktan sonra router ile kontrol edilecek
                    ? 'outlined'
                    : 'text'
                }
                href={`#${modulePath}`}
                sx={buttonSx}
                startIcon={
                  <Icon sx={{ marginRight: '12px' }}>{menu.icon}</Icon>
                }
              >
                {menu.title}
              </Button>
            )
          })}
        </div>
      </div>

      {!isCollapsed && <div
        className="app-sidebar-resizer"
        onMouseDown={startResizing}
        onClick={restoreResizing}
      />}
      <div className="app-sidebar-toggle" onClick={toggleResizing}>
        <Fab size="small" color="primary" aria-label="add">
          <Icon
            children={
              isCollapsed
                ? 'chevron_right'
                : 'chevron_left'
            }
          />
        </Fab>
      </div>
    </Styled>
  ) : (
    <div></div>
  )
}

export default LeftNav
