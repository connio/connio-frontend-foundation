import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function DeviceDesigner() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Device Designer" />
    </Content>
  );
}

export default DeviceDesigner;
