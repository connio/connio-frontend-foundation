import {ButtonProps} from '@mui/material/Button'

export interface AppsBarButtonProps extends ButtonProps {
  isCollapsed: boolean
  icon: React.ReactNode
  text: string,
  moduleId: string
}
