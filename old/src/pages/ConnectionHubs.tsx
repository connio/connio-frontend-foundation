import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function ConnectionHubs() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Connection Hubs" />
    </Content>
  );
}

export default ConnectionHubs;
