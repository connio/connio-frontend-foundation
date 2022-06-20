import Icon from '@mui/material/Icon'
import React from 'react'
import Home from '../pages/Home'

export type ModuleProps = {
  id: string
  title: string
  icon: React.ReactNode
  subModules?: Array<ModuleProps>
  ancestors?: Array<ModuleProps>
  component?: JSX.Element
}

export const modules = (): Array<ModuleProps> => {
  const modulesList: Array<ModuleProps> = [
    {
      id: 'home',
      title: 'Home',
      icon: <Icon children="home" />,
      component: <Home />,
    },
    {
      id: 'connectionHubs',
      title: 'Connection Hubs',
      icon: <Icon children="hub" />,
      component: <Home />,
    },
    { id: 'apps', title: 'Apps', icon: <Icon children="apps" /> },
    {
      id: 'assets',
      title: 'Assets',
      icon: <Icon children="desktop_windows" />,
      subModules: [
        {
          id: 'devices',
          title: 'Devices',
          icon: <Icon children="precision_manufacturing" />,
        },
        {
          id: 'places',
          title: 'Places',
          icon: <Icon children="location_on" />,
        },
        {
          id: 'simCards',
          title: 'Sim Cards',
          icon: <Icon children="sim_card" />,
        },
        {
          id: 'other',
          title: 'Other',
          icon: <Icon children="fire_extinguisher" />,
        },
      ],
    },
    {
      id: 'systemInsight',
      title: 'System Insight',
      icon: <Icon children="insights" />,
      subModules: [
        {
          id: 'dashboards',
          title: 'Dashboards',
          icon: <Icon children="dashboard" />,
        },
        { id: 'hmiScada', title: 'HMI/Scada', icon: <Icon children="speed" /> },
        {
          id: 'reports',
          title: 'Reports',
          icon: <Icon children="receipt_long" />,
        },
        {
          id: 'mlModels',
          title: 'ML Models',
          icon: <Icon children="account_tree" />,
        },
      ],
    },
    {
      id: 'dataOps',
      title: 'DataOps',
      icon: <Icon children="layers" />,
      subModules: [
        {
          id: 'pipelines',
          title: 'Pipelines',
          icon: <Icon children="cable" />,
        },
        {
          id: 'datasets',
          title: 'Datasets',
          icon: <Icon children="dataset" />,
        },
        {
          id: 'dataFlows',
          title: 'Data Flows',
          icon: <Icon children="account_tree" />,
        },
        {
          id: 'customTypes',
          title: 'Custom Types',
          icon: <Icon children="tune" />,
        },
        {
          id: 'dataLinks',
          title: 'Data Links',
          icon: <Icon children="link" />,
        },
        { id: 'triggers', title: 'Triggers', icon: <Icon children="cached" /> },
      ],
    },
    {
      id: 'assetDesigner',
      title: 'Asset Designer',
      icon: <Icon children="design_services" />,
      subModules: [
        {
          id: 'device',
          title: 'Device',
          icon: <Icon children="precision_manufacturing" />,
        },
        { id: 'place', title: 'Place', icon: <Icon children="location_on" /> },
        {
          id: 'simCard',
          title: 'Sim Card',
          icon: <Icon children="sim_card" />,
        },
        {
          id: 'custom',
          title: 'Custom',
          icon: <Icon children="fire_extinguisher" />,
        },
        {
          id: 'value-type',
          title: 'Value Type',
          icon: <Icon children="tune" />,
        },
      ],
    },
    {
      id: 'marketPlace',
      title: 'Market Place',
      icon: <Icon children="store" />,
    },
    {
      id: 'documentation',
      title: 'Documentation',
      icon: <Icon children="help" />,
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <Icon children="settings" />,
    },
    {
      id: 'support',
      title: 'Support',
      icon: <Icon children="headset_mic" />,
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: <Icon children="logout" />,
    },
  ]

  return modulesList
}
