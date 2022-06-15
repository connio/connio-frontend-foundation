import React from "react";
import { Layout, PageHeader } from "antd";

const { Content } = Layout;

function MarketPlace() {
  return (
    <Content>
      <PageHeader onBack={() => null} title="Market Place" />
    </Content>
  );
}

export default MarketPlace;
