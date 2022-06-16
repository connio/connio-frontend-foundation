import {ButtonProps} from '@mui/material/Button'

export interface AppsBarButtonProps extends ButtonProps {
  isCollapsed: boolean
  icon: string
  text: string,
  moduleId: string
}
