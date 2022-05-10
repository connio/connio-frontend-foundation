import React, { ReactNode, useState } from "react";
import { Button, Col, Row, Input, Card, Typography, Tabs, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ConnectorListItem } from "../../config/DataConnectorList";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

export interface DataConnectorsProps {
  items: ConnectorListItem[];
}

const DataConnectorSelector = (props: DataConnectorsProps) => {
  const onTabSelected = (key: string) => {
    console.log(`Selected tab: ${key}`);
  };

  const getConnectors = (category: string[] = []) => {
    if (category.length == 0) {
      return props.items.map((i) => i.item);
    } else {
      return props.items
        .filter((i) => {
          let union = new Set<string>(category.concat(i.category));
          return union.size < i.category.length + category.length;
        })
        .map((i) => i.item);
    }
  };

  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <Input size="small" placeholder="Search" prefix={<SearchOutlined />} />
      <Tabs
        defaultActiveKey="1"
        onChange={onTabSelected}
        size="small"
        type="line"
      >
        <TabPane tab="All" key="1">
          <Space size={[8, 16]} wrap>
            {getConnectors()}
          </Space>
        </TabPane>
        <TabPane tab="Industrial" key="2">
          <Space size={[8, 16]} wrap>
            {getConnectors(["industrial"])}
          </Space>
        </TabPane>
        <TabPane tab="Database" key="3">
          <Space size={[8, 16]} wrap>
            {getConnectors(["database"])}
          </Space>
        </TabPane>
        <TabPane tab="Services" key="4">
          <Space size={[8, 16]} wrap>
            {getConnectors(["service"])}
          </Space>
        </TabPane>
        <TabPane tab="Generic" key="5">
          <Space size={[8, 16]} wrap>
            {getConnectors(["generic"])}
          </Space>
        </TabPane>
        <TabPane tab="File" key="6">
          <Space size={[8, 16]} wrap>
            {getConnectors(["file"])}
          </Space>
        </TabPane>
        <TabPane tab="Test" key="7">
          <Space size={[8, 16]} wrap>
            {getConnectors(["test"])}
          </Space>
        </TabPane>
      </Tabs>
    </Space>
  );
};

export default DataConnectorSelector;
