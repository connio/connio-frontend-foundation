import { Layout as AntdLayout } from "antd";
import FlowEditorArea from "../../components/floweditor/FlowEditorArea";
import FlowEditorPalette from "../../components/floweditor/FlowEditorPalette";

const { Content } = AntdLayout;

function FlowDesigner() {
  return (
    <Content style={{ display: "flex" }}>
      <FlowEditorPalette />
      <FlowEditorArea />
    </Content>
  );
}

export default FlowDesigner;
