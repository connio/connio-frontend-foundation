import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function DataMesh() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Data Mesh" />
    </Content>
  );
}

export default DataMesh;
