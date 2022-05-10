import React, { useState } from "react";
import { Button, Col, Row, Card, Typography, Tabs, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {
  PlusOutlined,
  DoubleRightOutlined,
  SaveOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

interface DataConnectorCfgMockFileProps {
  items: string;
}

const DataConnectorCfgMockFile = (props: DataConnectorCfgMockFileProps) => {
  return <></>;
};

export default DataConnectorCfgMockFile;
