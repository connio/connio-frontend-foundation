import { Layout } from "antd";
import FlowEditorArea from "../../components/floweditor/FlowEditorArea";
import FlowEditorPalette from "../../components/floweditor/FlowEditorPalette";
import "./FlowEditor.css";

const { Content } = Layout;

function FlowEditor() {
  return (
    <div className="dndflow flow-editor">
      <FlowEditorPalette />
      <FlowEditorArea />
    </div>
  );
}

export default FlowEditor;
