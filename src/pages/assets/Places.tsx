import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Places() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Places" />
    </Content>
  );
}

export default Places;
