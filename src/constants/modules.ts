export type ModuleProps = {
  id: string
  title: string
  icon: string
  subitems?: Array<ModuleProps>
  ancestors?:Array<ModuleProps>
}

export const modules: Array<ModuleProps> = [
  {
    id: 'home',
    title: 'Home',
    icon: 'home',
  },
  {
    id: 'connectionHubs',
    title: 'Connection Hubs',
    icon: 'hub',
  },
  { id: 'apps', title: 'Apps', icon: 'apps' },
  {
    id: 'assets',
    title: 'Assets',
    icon: 'desktop_windows',
    subitems: [
      {
        id: 'devices',
        title: 'Devices',
        icon: 'precision_manufacturing',
      },
      { id: 'places', title: 'Places', icon: 'location_on' },
      { id: 'simCards', title: 'Sim Cards', icon: 'sim_card' },
      { id: 'other', title: 'Other', icon: 'fire_extinguisher' },
    ],
  },
  {
    id: 'systemInsight',
    title: 'System Insight',
    icon: 'insights',
    subitems: [
      { id: 'dashboards', title: 'Dashboards', icon: 'dashboard' },
      { id: 'hmiScada', title: 'HMI/Scada', icon: 'speed' },
      { id: 'reports', title: 'Reports', icon: 'receipt_long' },
      { id: 'mlModels', title: 'ML Models', icon: 'account_tree' },
    ],
  },
  {
    id: 'dataOps',
    title: 'DataOps',
    icon: 'layers',
    subitems: [
      { id: 'pipelines', title: 'Pipelines', icon: 'cable' },
      { id: 'datasets', title: 'Datasets', icon: 'dataset' },
      { id: 'dataFlows', title: 'Data Flows', icon: 'account_tree' },
      { id: 'customTypes', title: 'Custom Types', icon: 'tune' },
      { id: 'dataLinks', title: 'Data Links', icon: 'link' },
      { id: 'triggers', title: 'Triggers', icon: 'cached' },
    ],
  },
  {
    id: 'assetDesigner',
    title: 'Asset Designer',
    icon: 'design_services',
    subitems: [
      {
        id: 'device',
        title: 'Device',
        icon: 'precision_manufacturing',
      },
      { id: 'place', title: 'Place', icon: 'location_on' },
      { id: 'simCard', title: 'Sim Card', icon: 'sim_card' },
      { id: 'custom', title: 'Custom', icon: 'fire_extinguisher' },
      { id: 'value-type', title: 'Value Type', icon: 'tune' },
    ],
  },
  {
    id: 'marketPlace',
    title: 'Market Place',
    icon: 'store',
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: 'help',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'settings',
  },
  {
    id: 'support',
    title: 'Support',
    icon: 'headset_mic',
  },
]