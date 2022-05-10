import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export default interface IAppConfig {
  companyName: string;
  name: string;
  logoURL: string;
  logoAltText: string;
  docsURL: string;
  supportURL: string;
  sidebarMenuItems(): MenuItem[];
  headerRightMenuItems(): MenuItem[];
}
