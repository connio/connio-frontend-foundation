import React from "react";
import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function NotFound() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Page Not Found" />
    </Content>
  );
}

export default NotFound;
