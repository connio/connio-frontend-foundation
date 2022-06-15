import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Security() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Security" />
    </Content>
  );
}

export default Security;
