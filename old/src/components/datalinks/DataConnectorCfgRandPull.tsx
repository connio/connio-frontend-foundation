import React, { useState } from "react";
import {
  Button,
  Input,
  Form,
  Checkbox,
  InputNumber,
  Tooltip,
  Col,
  Row,
  Divider,
  Card,
  Typography,
  Tabs,
  Space,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  PlusOutlined,
  DoubleRightOutlined,
  LinkOutlined,
  SaveOutlined,
  DoubleLeftOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

interface DataConnectorCfgRandPullProps {
  items?: string;
}

const DataConnectorCfgRandPull = (props: DataConnectorCfgRandPullProps) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onSave = () => {
    console.log("Saved");
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Space direction="horizontal" size="small" style={{ display: "flex" }}>
        <Tooltip title="test">
          <Button
            type="primary"
            shape="circle"
            icon={<LinkOutlined />}
            size="small"
            disabled={true}
          />
        </Tooltip>
        <Text strong>Random Data Generator [Pull]</Text>
      </Space>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea showCount maxLength={80} />
        </Form.Item>

        <Divider />

        <Form.Item>
          <Space>
            <Button
              onClick={onSave}
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
            >
              Save
            </Button>
            <Button htmlType="button" onClick={() => null}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default DataConnectorCfgRandPull;
