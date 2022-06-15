import { Layout, PageHeader } from "antd";
import Devices from "./Devices";
import Places from "./Places";
import SIMCards from "./SIMCards";

const { Content } = Layout;

function Assets() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Assets" />
    </Content>
  );
}

export { Assets, Devices, Places, SIMCards };
