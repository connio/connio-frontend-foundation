import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Announcements() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Announcements" />
    </Content>
  );
}

export default Announcements;
