import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function SIM() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="SIM" />
    </Content>
  );
}

export default SIM;
