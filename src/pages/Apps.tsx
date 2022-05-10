import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Apps() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Apps" />
    </Content>
  );
}

export default Apps;
