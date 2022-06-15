import { ReactNode } from "react";
import { Card, Badge } from "antd";
import {
  RESTLogo,
  HTTPLogo,
  AzureDbService,
  AzureFileService,
  FileBinary,
} from "../components/svg/IconsSvg";

const LOGO_OPCUA = require("../images/opcua.png");
const LOGO_MQTT = require("../images/mqtt-logo.png");

const CardStyle = {
  width: "164px",
  height: "164px",
  backgroundColor: "#F0EFF0",
};

const CardHeadStyle = {
  backgroundColor: "#F0F2F5",
  fontSize: "12px",
};

export interface ConnectorListItem {
  category: string[];
  item: ReactNode;
}

const DataConnectorList: ConnectorListItem[] = [
  {
    category: ["industrial"],
    item: (
      <Card
        headStyle={CardHeadStyle}
        style={CardStyle}
        size="small"
        title="OPC UA Protocol"
        hoverable
        cover={
          <img
            src={LOGO_OPCUA}
            alt="OPC UA Logo"
            style={{ padding: "25% 5%" }}
          />
        }
      />
    ),
  },
  {
    category: ["industrial"],
    item: (
      <Card
        headStyle={CardHeadStyle}
        style={CardStyle}
        size="small"
        title="MQTT Protocol"
        hoverable
        cover={
          <img src={LOGO_MQTT} alt="MQTT Logo" style={{ padding: "25% 5%" }} />
        }
      />
    ),
  },
  {
    category: ["service", "azure", "database"],
    item: (
      <Card
        headStyle={CardHeadStyle}
        style={CardStyle}
        size="small"
        title="Azure SQL Database"
        hoverable
        cover={<AzureDbService />}
      />
    ),
  },
  {
    category: ["service", "azure", "file"],
    item: (
      <Card
        headStyle={CardHeadStyle}
        style={CardStyle}
        size="small"
        title="Azure File Storage"
        hoverable
        cover={<AzureFileService />}
      />
    ),
  },
  {
    category: ["generic", "service"],
    item: (
      <Card
        headStyle={CardHeadStyle}
        style={CardStyle}
        size="small"
        title="REST API"
        hoverable
        cover={<RESTLogo />}
      />
    ),
  },
  {
    category: ["generic"],
    item: (
      <Card
        headStyle={CardHeadStyle}
        style={CardStyle}
        size="small"
        title="HTTP"
        hoverable
        cover={<HTTPLogo />}
      />
    ),
  },
  {
    category: ["test"],
    item: (
      <Badge.Ribbon text="Test" color="volcano">
        <Card
          headStyle={CardHeadStyle}
          style={CardStyle}
          size="small"
          title="Random Data [Push]"
          hoverable
          cover={<FileBinary width={96} height={96} />}
        />
      </Badge.Ribbon>
    ),
  },
  {
    category: ["test"],
    item: (
      <Badge.Ribbon text="Test" color="volcano">
        <Card
          headStyle={CardHeadStyle}
          style={CardStyle}
          size="small"
          title="Random Data [Pull]"
          hoverable
          cover={<FileBinary width={96} height={96} />}
        />
      </Badge.Ribbon>
    ),
  },
  {
    category: ["test", "file"],
    item: (
      <Badge.Ribbon text="Test" color="volcano">
        <Card
          headStyle={CardHeadStyle}
          style={CardStyle}
          size="small"
          title="Mock File Storage"
          hoverable
          cover={<FileBinary width={96} height={96} />}
        />
      </Badge.Ribbon>
    ),
  },
];

export default DataConnectorList;
