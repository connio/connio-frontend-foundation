import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Devices() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Devices" />
    </Content>
  );
}

export default Devices;
