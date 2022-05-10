import { Layout as AntdLayout } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import IAppConfig from "../../core/IAppConfig";

export interface LayoutProps {
  config: IAppConfig;
}

function Layout(props: LayoutProps) {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Header
        companyName={props.config.companyName}
        productLogoUrl={props.config.logoURL}
        productName={props.config.name}
        productLogoAlt={props.config.logoAltText}
        rightMenuItems={props.config.headerRightMenuItems()}
      />
      <AntdLayout>
        <Sidebar items={props.config.sidebarMenuItems()} />
        <AntdLayout>
          <Outlet />
          <Footer />
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;
