export type Module = {
  id: string
  title: string
  icon: string
  subitems?: Array<Module>
}
export const modules: Record<string, Module> = {
  home: {
    id: 'home',
    title: 'Home',
    icon: 'home',
  },
  connectionHubs: {
    id: 'connectionHubs',
    title: 'Connection Hubs',
    icon: 'hub',
  },
  apps: { id: 'apps', title: 'Apps', icon: 'apps' },
  assets: {
    id: 'assets',
    title: 'Assets',
    icon: 'desktop_windows',
    subitems: [
      { id: 'devices', title: 'Devices', icon: 'precision_manufacturing' },
      { id: 'places', title: 'Places', icon: 'location_on' },
      { id: 'simCards', title: 'Sim Cards', icon: 'sim_card' },
      { id: 'other', title: 'Other', icon: 'fire_extinguisher' },
    ],
  },
  systemInsight: {
    id: 'systemInsight',
    title: 'System Insight',
    icon: 'insights',
    subitems: [
      { id: 'dashboards', title: 'Dashboards', icon: 'dashboard' },
      { id: 'hmi-scada', title: 'HMI/Scada', icon: 'speed' },
      { id: 'reports', title: 'Reports', icon: 'receipt_long' },
      { id: 'ml-models', title: 'ML Models', icon: 'account_tree' },
    ]
  },
  dataOps: {
    id: 'dataOps',
    title: 'DataOps',
    icon: 'layers',
    subitems : [
      {id:"pipelines",title:"Pipelines",icon:"cable"},
      {id:"datasets",title:"Datasets",icon:"dataset"},
      {id:"data-flows",title:"Data Flows",icon:"account_tree"},
      {id:"custom-types",title:"Custom Types",icon:"tune"},
      {id:"data-links",title:"Data Links",icon:"link"},
      {id:"triggers",title:"Triggers",icon:"cached"}

    ]
  },
  assetDesigner: {
    id: 'assetDesigner',
    title: 'Asset Designer',
    icon: 'design_services',
    subitems: [
      {id:"device",title:"Device",icon:"precision_manufacturing"},
      {id:"place",title:"Place",icon:"location_on"},
      {id:"simcard",title:"Sim Card",icon:"sim_card"},
      {id:"custom",title:"Custom",icon:"fire_extinguisher"},
      {id:"value-type",title:"Value Type",icon:"tune"},
    ]
  },
  marketPlace:{
    id:"marketPlace",
    title:"Market Place",
    icon:"store"
  },
  documentation:{
    id:"documentation",
    title:"Documentation",
    icon:"help"
  },
  settings:{
    id:"settings",
    title:"Settings",
    icon:"settings"
  },
  support:{
    id:"support",
    title:"Support",
    icon:"headset_mic"
  }
}

export const visibleModules = [
  modules.connectionHubs,
  modules.apps,
  modules.assets,
  modules.systemInsight,
  modules.dataOps,
  modules.assetDesigner,
]
export const commonModules = [
  modules.marketPlace,
  modules.documentation,
  modules.settings,
  modules.support
]