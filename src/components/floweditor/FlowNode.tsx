import React, { ReactNode, DragEvent } from "react";
import { Typography } from "antd";

const { Text } = Typography;

interface FlowNodeProps {
  label: string;
  icon: ReactNode;
  color: string;
  type: string;
}

export const FlowNode = (props: FlowNodeProps) => {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`flow-node ${props.type}`}
      style={{ backgroundColor: `${props.color}` }}
      onDragStart={(event) => onDragStart(event, props.type)}
      draggable
    >
      <div className="icon">{props.icon}</div>
      <Text className="label">{props.label}</Text>
    </div>
  );
};
