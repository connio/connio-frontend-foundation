import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function AssetDesigner() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Asset Type Designer" />
    </Content>
  );
}

export default AssetDesigner;
