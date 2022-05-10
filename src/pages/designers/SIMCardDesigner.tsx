import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function SIMDesigner() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="SIM / PSK Designer" />
    </Content>
  );
}

export default SIMDesigner;
