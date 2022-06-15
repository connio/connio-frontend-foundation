import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function MLModels() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="ML Models" />
    </Content>
  );
}

export default MLModels;
