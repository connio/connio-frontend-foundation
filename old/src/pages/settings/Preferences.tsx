import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Preferences() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Preferences" />
    </Content>
  );
}

export default Preferences;
