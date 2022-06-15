import React, { useState } from "react";
import {
  Button,
  Input,
  Form,
  Checkbox,
  InputNumber,
  Slider,
  Segmented,
  Tooltip,
  Select,
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
  MinusCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;
const { Option } = Select;

interface DataConnectorCfgRandPushProps {
  items?: string;
}

const DataConnectorCfgRandPush = (props: DataConnectorCfgRandPushProps) => {
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
        <Text strong>Random Data Generator [Push]</Text>
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
          rules={[
            {
              required: true,
              message:
                "Name should start and end with letter, number or underscore (_)",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea showCount maxLength={80} />
        </Form.Item>

        <Form.Item
          label="Interval"
          name="interval"
          tooltip={{
            title:
              "Data generation interval in milliseconds. Should be between 100 ms and 3600 ms.",
            icon: <QuestionCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: "Please enter an interval value in in milliseconds",
            },
          ]}
        >
          <InputNumber min={100} max={3600} />
        </Form.Item>

        <Form.Item label="Tags" name="tags">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Enter a tag"
            onChange={() => null}
          ></Select>
        </Form.Item>

        <Form.Item label="Type" name="type">
          <Segmented options={["Number", "String", "Json"]} />
        </Form.Item>

        <Form.Item label="Min/Max" name="numberLimits">
          <Slider
            range={{ draggableTrack: true }}
            defaultValue={[0, 0]}
            max={1000000}
            min={-1000000}
          />
        </Form.Item>

        <Form.Item label="Strings" name="stringList"></Form.Item>

        <Form.Item label="Json" name="json"></Form.Item>

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

export default DataConnectorCfgRandPush;
