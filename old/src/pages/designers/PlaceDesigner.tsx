import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function PlaceDesigner() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Place Designer" />
    </Content>
  );
}

export default PlaceDesigner;
