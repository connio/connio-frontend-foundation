import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Reports() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Reports" />
    </Content>
  );
}

export default Reports;
