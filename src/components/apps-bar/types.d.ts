export interface AppsBarProps {
  topModules: ModuleProps[]
  bottomModules: ModuleProps[]
  logo: string
  isCollapsed: boolean
  toggleCollapse: () => void
}
