import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Triggers() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Triggers" />
    </Content>
  );
}

export default Triggers;
