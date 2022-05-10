import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function Users() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Users" />
    </Content>
  );
}

export default Users;
