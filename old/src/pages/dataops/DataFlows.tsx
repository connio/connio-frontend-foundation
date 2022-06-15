import { Layout, Tabs, Space } from "antd";
import { useParams } from "react-router-dom";
import FlowEditor from "../../components/floweditor/FlowEditor";
import "./DataFlows.css";

const { Content } = Layout;
const { TabPane } = Tabs;

function DataFlows() {
  const { id } = useParams();

  return (
    <Content>
      <Tabs
        className="data-flow-tabs"
        onChange={() => null}
        type="editable-card"
        hideAdd
      >
        <TabPane className="data-flow-tabpane" tab={id?.toUpperCase()} key="0">
          <FlowEditor />
        </TabPane>
        <TabPane className="data-flow-tabpane" tab="Data Flow 1" key="1">
          Data Flow Tab Pane {id}
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default DataFlows;

/*
    <Content style={{ display: "flex" }}>
      <FlowEditorPalette />
      <FlowEditor2 />
    </Content>
*/
