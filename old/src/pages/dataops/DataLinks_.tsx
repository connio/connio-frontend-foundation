import React, { useState } from "react";
import {
  Layout,
  Button,
  Divider,
  Tag,
  Drawer,
  Table,
  Steps,
  Col,
  Row,
  Card,
  Typography,
  Tabs,
  Space,
  Tooltip,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  PlusOutlined,
  DoubleRightOutlined,
  SaveOutlined,
  DoubleLeftOutlined,
  QuestionCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { ProColumns } from "@ant-design/pro-table";
import ProTable, { TableDropdown } from "@ant-design/pro-table";
import DataConnectorSelector from "../../components/datalinks/DataConnectorSelector";
import DataConnectorList from "../../config/DataConnectorList";
import DataConnectorCfgRandPull from "../../components/datalinks/DataConnectorCfgRandPull";
import DataConnectorCfgRandPush from "../../components/datalinks/DataConnectorCfgRandPush";

const { Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

const valueEnum: { [key: number]: string } = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ["John", "Michael", "Jason", "Susan", "Tim"];

for (let i = 0; i < 5; i += 1) {
  let idx = Math.floor(Math.random() * 10) % 4;
  tableListDataSource.push({
    key: i,
    name: "AppName",
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[idx],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? "very long very long very long very long very long text to show but leave the tail"
        : "short note copy",
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: "Name",
    width: 80,
    dataIndex: "name",
    render: (_) => <a>{_}</a>,
  },
  {
    title: "Containers",
    dataIndex: "containers",
    align: "right",
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: "Status",
    width: 80,
    dataIndex: "status",
    initialValue: "all",
    valueEnum: {
      all: { text: "all", status: "Default" },
      close: { text: "close", status: "Default" },
      running: { text: "runnig", status: "Processing" },
      online: { text: "online", status: "Success" },
      error: { text: "error", status: "Error" },
    },
  },
  {
    title: "Creator",
    width: 80,
    dataIndex: "creator",
    valueEnum: {
      all: { text: "all" },
      John: { text: "John" },
      Michael: { text: "Michael" },
      Jason: { text: "Jason" },
      Susan: { text: "Susan" },
      Tim: { text: "Tim" },
    },
  },
  {
    title: (
      <>
        Created at
        <Tooltip placement="top" title="description">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: "since",
    dataIndex: "createdAt",
    valueType: "date",
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: "Memo",
    dataIndex: "memo",
    ellipsis: true,
    copyable: true,
  },
  {
    title: "Actions",
    width: 180,
    key: "option",
    valueType: "option",
    render: () => [
      <a key="link">link</a>,
      <a key="link2">monitor</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: "copy", name: "copy" },
          { key: "delete", name: "delete" },
        ]}
      />,
    ],
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

  return (
    <Content style={{ padding: "10px 20px 0 20px" }}>
      <Title level={4}>Data Links</Title>
      <Text>
        Data Links defines the connection information to a data store.
      </Text>

      <br />
      <br />

      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        dateFormatter="string"
        headerTitle="Connected Links"
        toolBarRender={() => [
          <Button
            type="primary"
            icon={<PlusOutlined />}
            //loading={loadings[1]}
            onClick={() => showDrawer()}
          >
            New
          </Button>,
        ]}
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
