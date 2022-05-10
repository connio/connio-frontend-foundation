import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Integrations() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Integrations" />
    </Content>
  );
}

export default Integrations;
