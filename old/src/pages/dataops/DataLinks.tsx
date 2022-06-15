import { useState } from "react";
import {
  Layout,
  Button,
  Tag,
  Drawer,
  Table,
  Card,
  Typography,
  Tabs,
  Space,
} from "antd";
import { useNavigate } from "react-router-dom";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DataConnectorSelector from "../../components/datalinks/DataConnectorSelector";
import DataConnectorList from "../../config/DataConnectorList";
import DataConnectorCfgRandPull from "../../components/datalinks/DataConnectorCfgRandPull";
import DataConnectorCfgRandPush from "../../components/datalinks/DataConnectorCfgRandPush";

const { Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

// const topOptions = [
//   { label: "topLeft", value: "topLeft" },
//   { label: "topCenter", value: "topCenter" },
//   { label: "topRight", value: "topRight" },
//   { label: "none", value: "none" },
// ];

// const bottomOptions = [
//   { label: "bottomLeft", value: "bottomLeft" },
//   { label: "bottomCenter", value: "bottomCenter" },
//   { label: "bottomRight", value: "bottomRight" },
//   { label: "none", value: "none" },
// ];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Related",
    dataIndex: "related",
    key: "related",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          return (
            <Tag color={"geekblue"} key={tag}>
              {tag.toLowerCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text: string, record: { name: string }) => (
      <Space size="middle">
        <a>
          <EditOutlined onClick={() => null} />
        </a>
        <a>
          <DeleteOutlined onClick={() => null} />
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "TicketingService",
    type: "HTTP",
    description: "Some description here...",
    related: "0",
    tags: ["ticketing", "test"],
  },
  {
    key: "2",
    name: "ConnioCloud",
    type: "REST",
    description: "Some description here...",
    related: "1",
    tags: ["connio"],
  },
  {
    key: "3",
    name: "ReportingDb",
    type: "MySQL",
    description: "Some description here...",
    related: "5",
    tags: ["reporting"],
  },
];

function DataLinks() {
  const [state, setState] = useState({ visible: false, childrenDrawer: false });
  let navigate = useNavigate();

  const showDrawer = () => {
    setState({
      visible: true,
      childrenDrawer: state.childrenDrawer,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
      childrenDrawer: state.childrenDrawer,
    });
  };

  const showChildrenDrawer = () => {
    setState({
      childrenDrawer: true,
      visible: state.visible,
    });
  };

  const onChildrenDrawerClose = () => {
    setState({
      childrenDrawer: false,
      visible: state.visible,
    });
  };

  // const tabState = {
  //   top: "topLeft",
  //   bottom: "bottomRight",
  // };

  return (
    <Content style={{ padding: "10px 20px 0 20px" }}>
      <Title level={4}>Data Links</Title>
      <Space direction="vertical">
        <Text>
          Data Links defines the connection information to a data store.
        </Text>

        <br />

        <Button
          type="primary"
          icon={<PlusOutlined />}
          //loading={loadings[1]}
          onClick={() => showDrawer()}
        >
          New
        </Button>
      </Space>

      <br />
      <br />

      <Table
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        size="small"
        dataSource={data}
      />

      <Drawer
        title="New data link"
        width={"35rem"}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={showChildrenDrawer} type="primary">
              Next
            </Button>
          </Space>
        }
      >
        <DataConnectorSelector items={DataConnectorList} />

        <Drawer
          title="Link Configuration"
          width={"30rem"}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={state.childrenDrawer}
          extra={
            <Space>
              <Button onClick={onChildrenDrawerClose}> Back</Button>
            </Space>
          }
        >
          <DataConnectorCfgRandPush />
        </Drawer>
      </Drawer>
    </Content>
  );
}

export default DataLinks;
