import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function ScadaHMI() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Scada / HMI" />
    </Content>
  );
}

export default ScadaHMI;
