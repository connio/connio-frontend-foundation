import IAppConfig, { MenuItem } from "../core/IAppConfig";
import {
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  LinkOutlined,
  ToolOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  Flowchart,
  Integrations1,
  Support,
  Security,
  Trigger2 as Trigger,
  Pipeline1 as Pipeline,
  ValueType1 as ValueType,
  Dataset,
  Hive,
  AddNew,
  DataMesh,
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
  name: "Unified Namaspace",
  logoAltText: "Product Logo",
  docsURL: "https://docs.connio.com",
  supportURL: "https://support.connio.com",
  sidebarMenuItems(): MenuItem[] {
    return [
      getMenuItem("Home", "/", <HomeOutlined />),

      getMenuItem("Data Mesh", "/mesh", <DataMesh />),

      getMenuItem("Datasets", "/dataops/datasets", <Dataset />, [
        getMenuItem("Add new", "/dataops/datasets/new", <AddNew />),
        getMenuItem("Dataset 1", "/dataops/datasets/1"),
        getMenuItem("Dataset 2", "/dataops/datasets/2"),
      ]),
      getMenuItem("Pipelines", "/dataops/pipelines", <Pipeline />, [
        getMenuItem("Add new", "/dataops/pipelines/new", <AddNew />),
        getMenuItem("Pipeline 1", "/dataops/pipelines/1"),
        getMenuItem("Pipeline 2", "/dataops/pipelines/2"),
      ]),
      getMenuItem("Data Flows", "/dataops/flows", <Flowchart />, [
        getMenuItem("Add new", "/dataops/flows/new", <AddNew />),
        getMenuItem("Data Flow 1", "/dataops/flows/1"),
        getMenuItem("Data Flow 2", "/dataops/flows/2"),
      ]),
      getMenuItem("Custom Types", "/dataops/types", <ValueType />),
      getMenuItem("Data Links", "/dataops/links", <LinkOutlined />),
      getMenuItem("Triggers", "/dataops/triggers", <Trigger />),

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
      getMenuItem("Create Pipleline", "/dataops/pipelines"),
      getMenuItem("Create Dataset", "/dataops/datasets"),
      getMenuItem("Create Data Flow", "/dataops/dataflows"),
      getMenuItem("Create Data Link", "/dataops/datalinks"),
    ];
  },
};
