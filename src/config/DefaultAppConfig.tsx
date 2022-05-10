import IAppConfig, { MenuItem } from "../core/IAppConfig";
import {
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  LinkOutlined,
  ToolOutlined,
  ShopOutlined,
  EnvironmentOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  DashboardOutlined,
  PlusOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  RobotArm,
  Monitoring,
  Flowchart,
  Integrations1,
  Database,
  Teapot,
  SimCard2 as SimCard,
  Support,
  Designer,
  MachineLearning1 as MachineLearning,
  Reports,
  DataOps,
  Security,
  Trigger2 as Trigger,
  Pipeline1 as Pipeline,
  Connection,
  ValueType1 as ValueType,
  AssetMonitoring,
  Dashboard,
  App,
  DatasetLinked,
  Dataset,
  Hive,
  AddNew,
} from "../components/svg/IconsSvg";

function getMenuItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  disabled?: boolean
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    disabled,
  } as MenuItem;
}

export const ThisProduct: IAppConfig = {
  companyName: "",
  logoURL: "\\prodlogo.svg",
  name: "Industrial IoT Apps",
  logoAltText: "Product Logo",
  docsURL: "https://docs.connio.com",
  supportURL: "https://support.connio.com",
  sidebarMenuItems(): MenuItem[] {
    return [
      getMenuItem("Home", "/", <HomeOutlined />),

      getMenuItem("Connection Hubs", "/hubs", <Hive width={16} height={16} />),

      getMenuItem("Apps", "/apps", <AppstoreOutlined />),

      getMenuItem("Assets", "/assets", <AssetMonitoring />, [
        getMenuItem("Devices", "/assets/devices", <RobotArm />),
        getMenuItem("Places", "/assets/places", <EnvironmentOutlined />),
        getMenuItem("SIM cards", "/assets/simcards", <SimCard />),
        getMenuItem("Other", "/assets/other", <Teapot />),
      ]),

      getMenuItem("System Insight", "/insight", <Monitoring />, [
        getMenuItem("Dashboards", "/insight/dashboards", <Dashboard />),
        getMenuItem("HMI / Scada", "/insight/scada_hmi", <DashboardOutlined />),
        getMenuItem("Reports", "/insight/reports", <Reports />),
        getMenuItem("ML Models", "/insight/mlmodels", <MachineLearning />),
      ]),

      // getMenuItem("DataOps", "/dataops", <DataOps />),

      getMenuItem("DataOps", "/dataops", <DataOps />, [
        getMenuItem("Pipelines", "/dataops/pipelines", <Pipeline />, [
          getMenuItem("Add new", "/dataops/pipelines/new", <AddNew />),
          getMenuItem("Pipeline 1", "/dataops/pipelines/1"),
          getMenuItem("Pipeline 2", "/dataops/pipelines/2"),
        ]),
        getMenuItem("Datasets", "/dataops/datasets", <Dataset />, [
          getMenuItem("Add new", "/dataops/datasets/new", <AddNew />),
          getMenuItem("Dataset 1", "/dataops/datasets/1"),
          getMenuItem("Dataset 2", "/dataops/datasets/2"),
        ]),
        getMenuItem("Data Flows", "/dataops/flows", <Flowchart />, [
          getMenuItem("Add new", "/dataops/flows/new", <AddNew />),
          getMenuItem("Data Flow 1", "/dataops/flows/1"),
          getMenuItem("Data Flow 2", "/dataops/flows/2"),
        ]),
        getMenuItem("Custom Types", "/dataops/types", <ValueType />),
        getMenuItem("Data Links", "/dataops/links", <LinkOutlined />),
        getMenuItem("Triggers", "/dataops/triggers", <Trigger />),
      ]),

      getMenuItem("Asset Designer", "/designers", <Designer />, [
        getMenuItem("Device", "/designers/device", <RobotArm />),
        getMenuItem("Place", "/designers/place", <EnvironmentOutlined />),
        getMenuItem("SIM Card", "/designers/simcard", <SimCard />),
        getMenuItem("Custom", "/designers/asset", <Teapot />),
        getMenuItem("Value Type", "/designers/value", <ValueType />),
      ]),

      getMenuItem("Market Place", "/marketplace", <ShopOutlined />),
      getMenuItem(
        <a href={this.docsURL} target="_blank" rel="noopener noreferrer">
          Documentation
        </a>,
        this.docsURL,
        <QuestionCircleOutlined />
      ),

      getMenuItem("Settings", "/settings", <SettingOutlined />, [
        getMenuItem("Users", "/settings/users", <TeamOutlined />),
        getMenuItem("Security", "/settings/security", <Security />),
        getMenuItem("Preferences", "/settings/preferences", <ToolOutlined />),
        getMenuItem(
          "Announcements",
          "/settings/announcements",
          <NotificationOutlined />
        ),
        getMenuItem(
          "Integrations",
          "/settings/integrations",
          <Integrations1 />
        ),
      ]),
      getMenuItem(
        <a href={this.supportURL} target="_blank" rel="noopener noreferrer">
          Help + Support
        </a>,
        this.supportURL,
        <Support />
      ),
    ];
  },
  headerRightMenuItems(): MenuItem[] {
    return [
      getMenuItem("Create App", "/apps"),
      getMenuItem("Create Device", "/designers/device"),
      getMenuItem("Create Place", "/designers/place"),
      getMenuItem("Create Asset Type", "/designers/asset"),
      getMenuItem("Create Dashboard", "/insight/dashboards"),
      getMenuItem("Create Pipleline", "/dataops/pipelines"),
    ];
  },
};
