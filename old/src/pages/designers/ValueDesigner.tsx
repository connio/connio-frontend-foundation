import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function ValueDesigner() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Value Type Designer" />
    </Content>
  );
}

export default ValueDesigner;
